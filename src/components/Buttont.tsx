// components/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  variant,
  onClick,
  children,
  className,
}: ButtonProps) {
  const baseClass = "border h-12 rounded-full px-6 font-medium";
  const variantClass =
    variant === "primary"
      ? "bg-lime-400 text-neutral-950 border-lime-400"
      : "border-white text-white bg-transparent";

  return (
    <button
      onClick={onClick}
      className={clsx(baseClass, variantClass, className)}
    >
      {children}
    </button>
  );
}
