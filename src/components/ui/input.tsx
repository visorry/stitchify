import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "curvy" | "color";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "rounded-md border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-300",
      curvy: "rounded-full border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-gray-300",
      color: "border border-emerald-500 text-emerald-700 placeholder:text-emerald-400 focus:ring-2 focus:ring-emerald-500",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full px-4 py-2 text-base shadow-md transition-colors placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
