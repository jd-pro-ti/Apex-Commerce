"use client";

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 font-label tracking-[0.05em] uppercase rounded-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary: "bg-neutral/10 text-primary hover:bg-neutral/20",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:text-tertiary",
        gold: "bg-tertiary text-secondary hover:bg-tertiary/90",
        tertiary: "bg-tertiary text-secondary hover:bg-tertiary/90",
        inverted: "bg-secondary text-white hover:bg-primary",
      },
      size: {
        default: "px-8 py-3 text-sm",
        sm: "px-6 py-2 text-xs",
        lg: "px-10 py-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export const Button = forwardRef(function Button(
  { className, variant, size, asChild = false, type, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : type ?? "button"}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});
