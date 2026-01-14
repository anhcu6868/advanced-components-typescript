// Polymorphic Component
import type { ComponentPropsWithoutRef, ElementType } from "react"

type ContainerProps<T extends ElementType> = {
  as?: T
  children: React.ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div"
  return <Component {...props}>{children}</Component>
}
