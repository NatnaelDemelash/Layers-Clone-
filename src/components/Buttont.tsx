// components/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "sm";
};

export default function Button({
  variant,
  onClick,
  children,
  className,
  type,
  size,
}: ButtonProps) {
  const baseClass = "border h-12 rounded-full px-6 font-medium";
  const variantClass =
    variant === "primary"
      ? "bg-lime-400 text-neutral-950 border-lime-400"
      : "border-white text-white bg-transparent";

  const sizeClass = size === "sm" ? "h-10 text-sm" : "";

  return (
    <button
      onClick={onClick}
      className={clsx(baseClass, variantClass, sizeClass, className)}
      type={type}
    >
      {children}
    </button>
  );
}
