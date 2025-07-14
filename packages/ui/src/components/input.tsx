import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-input",
        destructive:
          "border-destructive/50 bg-input focus-visible:ring-destructive",
        outline: "border-2 focus-visible:ring-2 bg-transparent",
        outline_destructive:
          "border-2 border-destructive/50 focus-visible:ring-destructive bg-transparent",
        ghost: "border-none bg-transparent shadow-none",
        secondary: "border-secondary bg-secondary/50",
      },
      inputSize: {
        default: "h-14 px-3 py-1",
        sm: "h-8 px-2 py-1 text-xs ",
        lg: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
