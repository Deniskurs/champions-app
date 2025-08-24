import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTA(props: React.ComponentProps<typeof Button>) {
  return (
    <Button 
      size="lg" 
      className={cn(
        // TRW Champions exact button styling
        "rounded-none font-bold uppercase tracking-wider text-sm px-8 py-4 h-auto",
        "bg-gradient-to-r from-red-600 to-red-500",
        "hover:from-red-700 hover:to-red-600",
        "text-white border-0",
        "shadow-lg hover:shadow-xl",
        "transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
        "font-sans", // Use Work Sans for buttons
        props.className
      )} 
      {...props} 
    />
  )
}