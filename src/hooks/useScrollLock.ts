import { useEffect } from "react";

const useScrollLock = (scrollLock: boolean): void => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (scrollLock) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [scrollLock]);
};

export default useScrollLock;
