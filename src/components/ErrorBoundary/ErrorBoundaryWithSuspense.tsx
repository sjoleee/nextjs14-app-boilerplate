import { Suspense, type SuspenseProps } from "react";

import ErrorBoundary from "./ErrorBoundary";
import { type ErrorBoundaryBaseProps } from "./ErrorBoundaryBase";

interface ErrorBoundaryWithSuspenseProps extends Omit<ErrorBoundaryBaseProps, "fallback"> {
  errorFallback?: ErrorBoundaryBaseProps["fallback"];
  loadingFallback?: SuspenseProps["fallback"];
}

const ErrorBoundaryWithSuspense = ({
  errorFallback,
  loadingFallback,

  children,
}: ErrorBoundaryWithSuspenseProps) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWithSuspense;
