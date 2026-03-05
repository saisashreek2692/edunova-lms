"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary: "bg-brand-gradient text-white shadow-lg hover:scale-105",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
