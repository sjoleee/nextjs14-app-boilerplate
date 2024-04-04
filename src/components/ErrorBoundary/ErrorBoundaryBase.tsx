"use client";

import { Component, type ReactElement, type ReactNode } from "react";

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
  resetQuery?: () => void;
  fallback?: ReactElement;
  children: ReactElement;
}

class ErrorBoundaryBase extends Component<ErrorBoundaryBaseProps, ErrorBoundaryBaseState> {
  constructor(props: ErrorBoundaryBaseProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryBaseState {
    return { hasError: true, error: error };
  }

  componentDidCatch(): void {}

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  resetErrorWithQuery = () => {
    this.props.resetQuery?.();
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      const returnElement = this.props.fallback;

      if (!returnElement) {
        return this.props.children;
      }

      return returnElement;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryBase;
