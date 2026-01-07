import * as React from "react";
import { cn } from "./utils";

function ACard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-[12px] flex flex-col",
        className,
      )}
      {...props}
    />
  );
}

function ACardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-6 pt-6", className)}
      {...props}
    />
  );
}

function ACardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h3
      className={cn("text-xl font-semibold text-gray-900", className)}
      {...props}
    />
  );
}

function ACardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      className={cn("text-gray-600 text-sm mt-1", className)}
      {...props}
    />
  );
}

function ACardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-6 pb-6", className)}
      {...props}
    />
  );
}

function ACardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center px-6 pb-6", className)}
      {...props}
    />
  );
}

export {
  ACard,
  ACardHeader,
  ACardFooter,
  ACardTitle,
  ACardDescription,
  ACardContent,
};

