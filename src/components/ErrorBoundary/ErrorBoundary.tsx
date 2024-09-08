"use client";

import ErrorBoundaryBase, { type ErrorBoundaryBaseProps } from './ErrorBoundaryBase';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';

const ErrorBoundary = ({ fallback, onError, children }: Omit<ErrorBoundaryBaseProps, 'resetQuery'>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundaryBase fallback={fallback} resetQuery={reset} onError={onError}>
      {children}
    </ErrorBoundaryBase>
  );
};

export default ErrorBoundary;
