// Polymorphic Component
import type { ElementType } from "react"

type ContainerProps = {
  as: ElementType
}

const Container = ({ as: Component }: ContainerProps) => {
  return <Component />
}

export default Container
