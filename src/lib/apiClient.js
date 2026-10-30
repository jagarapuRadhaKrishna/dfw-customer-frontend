/**
 * Centralized API Client with Error Handling
 * Wraps fetch with error handling, retry logic, and error mapping
 */

import { handleApiError, retryWithBackoff, shouldShowFullPageError } from '@/utils/errorHandler';

/**
 * API Client Configuration
 */
const API_CONFIG = {
  baseURL: '',
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
};

/**
 * Create a timeout promise
 */
function createTimeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), ms);
  });
}

/**
 * Parse error from response
 */
function parseResponseError(response) {
  const error = new Error(response.statusText || 'Request failed');
  error.status = response.status;
  error.response = response;
  error.url = response.url;

  return error;
}

/**
 * Handle network/connection errors
 */
function parseNetworkError(error) {
  if (error.name === 'AbortError') {
    const timeoutError = new Error('Request timeout');
    timeoutError.code = 'TIMEOUT';
    timeoutError.status = 408;
    return timeoutError;
  }

  if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
    const networkError = new Error('Network connection failed');
    networkError.code = 'NETWORK_ERROR';
    networkError.status = 0;
    return networkError;
  }

  return error;
}

/**
 * Make API request with error handling
 */
export async function apiRequest(url, options = {}, context = {}) {
  const {
    method = 'GET',
    headers = {},
    body = null,
    timeout = API_CONFIG.timeout,
    retries = API_CONFIG.retries,
    retryDelay = API_CONFIG.retryDelay,
    skipRetry = false,
    isNonIdempotent = false,
  } = options;

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const requestFn = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await Promise.race([
        fetch(url, {
          ...requestOptions,
          signal: controller.signal,
        }),
        createTimeout(timeout),
      ]);

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw parseResponseError(response);
      }

      // Try to parse JSON, otherwise return text
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }

      return await response.text();
    } catch (error) {
      throw parseNetworkError(error);
    }
  };

  try {
    if (skipRetry || isNonIdempotent) {
      return await requestFn();
    }

    return await retryWithBackoff(requestFn, retries, retryDelay);
  } catch (error) {
    const errorInfo = handleApiError(error, {
      url,
      method,
      route: context.route,
    });

    // If this is a full-page error, we might want to navigate to error page
    // This is handled by the consuming component based on errorInfo.shouldShowFullPage

    throw errorInfo;
  }
}

/**
 * Convenience methods for common HTTP operations
 */
export const api = {
  get: (url, options = {}, context = {}) =>
    apiRequest(url, { ...options, method: 'GET' }, context),

  post: (url, data, options = {}, context = {}) =>
    apiRequest(url, { ...options, method: 'POST', body: data, isNonIdempotent: true }, context),

  put: (url, data, options = {}, context = {}) =>
    apiRequest(url, { ...options, method: 'PUT', body: data }, context),

  patch: (url, data, options = {}, context = {}) =>
    apiRequest(url, { ...options, method: 'PATCH', body: data, isNonIdempotent: true }, context),

  delete: (url, options = {}, context = {}) =>
    apiRequest(url, { ...options, method: 'DELETE', isNonIdempotent: true }, context),
};

export default api;
