"use client";
import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}


