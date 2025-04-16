import { cn } from "@/lib/utils";
import * as React from "react";

export const Button = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <button
    ref={ref}
    className={cn("bg-[#0087C7] text-white px-6 py-3 rounded", className)}
    {...props}
  />
));
Button.displayName = "Button";
