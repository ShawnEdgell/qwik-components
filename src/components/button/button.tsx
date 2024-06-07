import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  label: string;
  onClick$?: PropFunction<() => void>;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";
}

export const Button = component$(
  ({ label, onClick$, type = "button", variant = "primary" }: ButtonProps) => {
    const baseClasses =
      "px-4 py-2 font-bold rounded focus:outline-none focus:shadow-outline";
    const variantClasses = {
      primary: "bg-primary-500 text-base-100 hover:bg-primary-600",
      secondary: "bg-secondary-500 text-base-100 hover:bg-secondary-600",
      tertiary: "bg-tertiary-500 text-base-100 hover:bg-tertiary-600",
      success: "bg-success-500 text-base-100 hover:bg-success-600",
      warning: "bg-warning-500 text-base-100 hover:bg-warning-600",
      error: "bg-error-500 text-base-100 hover:bg-error-600",
    };

    return (
      <button
        type={type}
        onClick$={onClick$}
        class={`${baseClasses} ${variantClasses[variant]}`}
      >
        {label}
      </button>
    );
  },
);
