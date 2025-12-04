import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 gap-2",
  {
    variants: {
      variant: {
        primary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
        outline: "bg-transparent hover:bg-white/5 text-zinc-300 border border-zinc-700",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);

Button.displayName = "Button";

export { buttonVariants };
