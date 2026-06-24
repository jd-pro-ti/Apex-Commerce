import { cn } from "@/lib/utils";

export function Button({ 
  className, 
  variant = "primary", 
  size = "default", 
  children,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-light tracking-[0.05em] uppercase text-sm";
  
  const variants = {
    primary: "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]",
    outline: "border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white",
    ghost: "text-[#0a0a0a] hover:text-[#c9a84c]",
    gold: "bg-[#c9a84c] text-white hover:bg-[#dbb95c]",
  };
  
  const sizes = {
    default: "px-8 py-3",
    sm: "px-6 py-2 text-xs",
    lg: "px-10 py-4",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}