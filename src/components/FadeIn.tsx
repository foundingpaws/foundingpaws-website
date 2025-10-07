"use client";
import { PropsWithChildren } from "react";

export default function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return <div>{children}</div>;
}


