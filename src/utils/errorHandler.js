/**
 * Centralized Error Handler
 * Maps HTTP errors to appropriate error components and logging
 */

export const ErrorTypes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  CONNECTION_REFUSED: 'CONNECTION_REFUSED',
  SERVER_ERROR: 'SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  APPLICATION_ERROR: 'APPLICATION_ERROR',
};

export const StatusCodeMap = {
  400: ErrorTypes.VALIDATION_ERROR,
  401: ErrorTypes.UNAUTHORIZED,
  403: ErrorTypes.FORBIDDEN,
  404: ErrorTypes.NOT_FOUND,
  422: ErrorTypes.VALIDATION_ERROR,
  500: ErrorTypes.SERVER_ERROR,
  502: ErrorTypes.SERVER_ERROR,
  503: ErrorTypes.SERVER_ERROR,
  504: ErrorTypes.SERVER_ERROR,
};

/**
 * Log error details for debugging (without exposing sensitive data)
 */
export function logError(error, context = {}) {
  const errorLog = {
    timestamp: new Date().toISOString(),
    type: error.name || 'UnknownError',
    message: error.message,
    status: error.status || error.response?.status,
    url: error.config?.url || error.request?.responseURL,
    route: context.route || window.location.pathname,
    ...context,
  };

  // Remove sensitive information
  const sanitizedLog = {
    ...errorLog,
    headers: undefined, // Never log headers (may contain auth tokens)
    config: errorLog.config ? { ...errorLog.config, headers: undefined } : undefined,
  };

  console.error('Error logged:', sanitizedLog);

  // In production, send to error reporting service
  // Example: errorReportingService.log(sanitizedLog);

  return sanitizedLog;
}

/**
 * Determine if error should show full-page error screen
 */
export function shouldShowFullPageError(error) {
  // Show full page for server errors
  if (error.status >= 500) return true;

  // Show full page for connection errors
  if (error.code === 'ERR_CONNECTION_REFUSED' || error.code === 'NETWORK_ERROR') {
    return true;
  }

  // Don't show full page for validation errors
  if (error.status === 400 || error.status === 422) return false;

  // Don't show full page for 401 (handled by auth flow)
  if (error.status === 401) return false;

  // Show full page for 403 access denied
  if (error.status === 403) return true;

  // Don't show full page for resource-specific 404s (handled in-page)
  if (error.status === 404 && !error.isGlobal) return false;

  return false;
}

/**
 * Get error type from HTTP status or error code
 */
export function getErrorType(error) {
  if (error.status) {
    return StatusCodeMap[error.status] || ErrorTypes.APPLICATION_ERROR;
  }

  if (error.code === 'ERR_CONNECTION_REFUSED') {
    return ErrorTypes.CONNECTION_REFUSED;
  }

  if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
    return ErrorTypes.NETWORK_ERROR;
  }

  return ErrorTypes.APPLICATION_ERROR;
}

/**
 * Retry with exponential backoff
 */
export async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  let lastError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      // Don't retry non-idempotent operations
      if (error.isNonIdempotent) {
        throw error;
      }

      // Don't retry on client errors (4xx)
      if (error.status >= 400 && error.status < 500) {
        throw error;
      }

      // Calculate delay with exponential backoff
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 1000;

      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

/**
 * Handle API error and determine appropriate response
 */
export function handleApiError(error, context = {}) {
  const errorType = getErrorType(error);
  const errorLog = logError(error, context);

  return {
    errorType,
    shouldShowFullPage: shouldShowFullPage(error),
    errorLog,
    error,
  };
}
