"use client";

import { type ErrorBoundaryBaseProps } from "./ErrorBoundaryBase";
import ErrorBoundaryBase from "./ErrorBoundaryBase";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const ErrorBoundary = ({ fallback, children }: Omit<ErrorBoundaryBaseProps, "resetQuery">) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundaryBase fallback={fallback} resetQuery={reset}>
      {children}
    </ErrorBoundaryBase>
  );
};

export default ErrorBoundary;
