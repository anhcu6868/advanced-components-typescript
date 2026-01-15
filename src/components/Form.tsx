import type { ComponentPropsWithoutRef } from "react"

type FormProps = ComponentPropsWithoutRef<"form">

const Form = (props: FormProps) => {
  return <form {...props}>{props.children}</form>
}

export default Form
