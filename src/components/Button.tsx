import type { ComponentPropsWithoutRef, FC } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never
}

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string
}
// Type Predicates
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props
}

const Button: FC<AnchorProps | ButtonProps> = (props) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>
  }
  return <button className="button" {...props}></button>
}

export default Button

// type ButtonProps = {
//   children: ReactNode
// } & ComponentPropsWithoutRef<"button">

// type AnchorProps = {
//   href: string
//   children: ReactNode
// } & ComponentPropsWithoutRef<"a">

// const Button = (props: ButtonProps | AnchorProps) => {
//   if ("href" in props) {
//     return <a href={props.href}>{props.children}</a>
//   }
//   return <button>{props.children}</button>
// }

// export default Button
