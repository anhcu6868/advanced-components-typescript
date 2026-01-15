import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
      </Form>
      <p>
        <Button>Save</Button>
      </p>
    </main>
  )
}

export default App
