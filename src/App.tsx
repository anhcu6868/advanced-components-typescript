import Button from "./components/Button"
function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}

      <p>
        <Button el="button">Test Button</Button>
      </p>

      <p>
        <Button el="anchor" href="https://www.vlu.edu.vn/" target="_blank">
          Link
        </Button>
      </p>
    </main>
  )
}

export default App
