import { cn } from "@/lib/utils"

export function Container({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn("container mx-auto px-3 md:px-4", className)}>
      {children}
    </div>
  )
}