import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonProps = {
  // Core
  children: React.ReactNode;
  disabled?: boolean;

  // Event handlers
  onClick?: () => void;

  // Custom
  variant?: "outlined" | "contained";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  size = "md",
  disabled = false,
  className,
}) => {
  const buttonClass = clsx(
    styles.button,
    { [styles.disabled]: disabled },
    styles[size],
    styles[variant],
    className
  );
  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
};
