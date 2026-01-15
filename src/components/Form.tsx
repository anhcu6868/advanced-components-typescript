import type { ComponentPropsWithoutRef, FormEvent } from "react"

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void
}

const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  // Handle Submit Form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    onSave(data)
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  )
}

export default Form
