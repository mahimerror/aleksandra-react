import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex min-h-10 w-full rounded-xl bg-background px-5 py-4 ring-offset-primary file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#DFE3E8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-[15px]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
