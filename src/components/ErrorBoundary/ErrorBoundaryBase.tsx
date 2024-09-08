"use client";

import { Component, type ReactElement, type ReactNode } from 'react';

interface ErrorBoundaryBaseState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorBoundaryFallbackParams {
  error: Error;
  resetError: () => void;
  resetErrorWithQuery: () => void;
}

export interface ErrorBoundaryBaseProps {
  fallback: ReactElement | ((params: ErrorBoundaryFallbackParams) => ReactElement);
  children: ReactElement;
  resetQuery?: () => void;
  onError?: (error: ErrorBoundaryFallbackParams) => void;
}

class ErrorBoundaryBase extends Component<ErrorBoundaryBaseProps, ErrorBoundaryBaseState> {
  constructor(props: ErrorBoundaryBaseProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryBaseState {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error): void {
    this.props.onError?.({
      error: error,
      resetError: this.resetError,
      resetErrorWithQuery: this.resetErrorWithQuery,
    });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  resetErrorWithQuery = () => {
    this.props.resetQuery?.();
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      const returnElement =
        typeof this.props.fallback === 'function'
          ? this.props.fallback?.({
              error: this.state.error,
              resetError: this.resetError,
              resetErrorWithQuery: this.resetErrorWithQuery,
            })
          : this.props.fallback;

      if (!returnElement) {
        return this.props.children;
      }

      return returnElement;
    }

    return this.props.children;
  }
}
export default ErrorBoundaryBase;
