'use client';

import React, { Component } from 'react';
import ApplicationError from './ApplicationError';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Log error to error reporting service
    console.error('ErrorBoundary caught an error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log additional error details
    console.error('Error Info:', errorInfo);

    // Here you would typically send error to a logging service
    // Example: logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ApplicationError
          error={this.state.error}
          reset={() => this.setState({ hasError: false, error: null })}
        />
      );
    }

    return this.props.children;
  }
}
