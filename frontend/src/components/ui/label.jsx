import * as React from "react";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
    {...props}
  />
));
Label.displayName = "Label";