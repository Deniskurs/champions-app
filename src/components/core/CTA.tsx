import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTA(props: React.ComponentProps<typeof Button>) {
  const { variant = "default", ...restProps } = props;
  
  // TRW has different button styles - some are underlined links, some are solid buttons
  if (variant === "link" || variant === "ghost") {
    return (
      <Button 
        variant="ghost"
        size="lg" 
        className={cn(
          // TRW link-style button (like top banner and some CTAs)
          "rounded-none font-extrabold uppercase tracking-wider text-sm px-0 py-0 h-auto",
          "bg-transparent hover:bg-transparent",
          "text-accent underline decoration-accent underline-offset-4",
          "hover:text-accent/90 hover:no-underline",
          "transition-all duration-200 ease-out",
          "font-sans border-0 shadow-none",
          props.className
        )} 
        {...restProps} 
      />
    );
  }
  
  // Main CTA button style
  return (
    <Button 
      size="lg" 
      className={cn(
        // TRW Champions main CTA button - has animated background and special effects
        "relative overflow-hidden rounded-none font-extrabold uppercase tracking-wider text-sm px-12 py-6 h-auto",
        "bg-transparent border-2 border-accent text-accent",
        "hover:bg-accent hover:text-white hover:border-accent",
        "transition-all duration-300 ease-out",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        "shadow-lg hover:shadow-2xl",
        "font-sans",
        // Add the animated background effect
        "before:content-[''] before:absolute before:inset-0 before:bg-accent before:transform before:scale-x-0 before:origin-left",
        "before:transition-transform before:duration-300 before:ease-out before:z-[-1]",
        "hover:before:scale-x-100",
        props.className
      )} 
      {...restProps} 
    />
  )
}