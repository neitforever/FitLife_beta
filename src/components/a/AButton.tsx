import * as React from "react";
import { cn } from "./utils";

const buttonVariants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-700 hover:text-gray-900 hover:bg-gray-100",
  link: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-11 px-6",
  sm: "h-9 px-4",
  lg: "h-12 px-8",
};

export interface AButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const AButton = React.forwardRef<HTMLButtonElement, AButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
AButton.displayName = "AButton";

export { AButton };

