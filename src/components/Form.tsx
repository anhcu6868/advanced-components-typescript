import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react"

export type FormHandle = {
  clear: () => void
}

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null)
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("Clearing the form")
          form.current?.reset()
        },
      }
    })
    // Handle Submit Form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData)
      onSave(data)
    }
    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    )
  }
)

export default Form
