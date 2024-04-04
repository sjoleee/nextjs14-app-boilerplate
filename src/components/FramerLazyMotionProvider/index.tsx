"use client";

import { type PropsWithChildren } from "react";

import { LazyMotion, domMax } from "framer-motion";

const FramerLazyMotionProvider = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
};

export default FramerLazyMotionProvider;
