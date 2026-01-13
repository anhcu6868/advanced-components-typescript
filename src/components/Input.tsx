import type { FC } from "react"

type InputProps = {
  id: string
  label: string
}

const Input: FC<InputProps> = ({ id, label }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  )
}

export default Input
