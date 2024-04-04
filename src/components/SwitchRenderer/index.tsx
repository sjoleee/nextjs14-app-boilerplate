import { type ReactElement } from "react";

interface SwitchRendererProps<T extends string | number> {
  caseBy: Partial<Record<T, ReactElement | null>>;
  value: T | null;
  defaultComponent?: ReactElement | null;
}

const SwitchRenderer = <T extends string | number>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchRendererProps<T>) => {
  if (value === null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
};

export default SwitchRenderer;
