// components/AnimatedCounter.tsx
"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  value: number;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={value} duration={2} />+
      </h3>
      <p className="mt-2 text-lg text-white dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
