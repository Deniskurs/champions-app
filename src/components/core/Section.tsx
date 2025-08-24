import { cn } from "@/lib/utils"
import { Container } from "./Container"

export function Section({ 
  id, 
  className, 
  children,
  container = true 
}: { 
  id?: string
  className?: string
  children: React.ReactNode
  container?: boolean
}) {
  const content = container ? (
    <Container>{children}</Container>
  ) : (
    children
  )

  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {content}
    </section>
  )
}