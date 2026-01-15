import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"
import { useRef } from "react"
import { type FormHandle } from "./components/Form"

function App() {
  const customForm = useRef<FormHandle>(null)
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string }
    console.log(extractedData)
    customForm.current?.clear()
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
