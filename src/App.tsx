import Button from "./components/Button"
function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}

      <p>
        <Button>A Button</Button>
      </p>

      <p>
        <Button target="_blank" href="https://google.com">
          A Link
        </Button>
      </p>
    </main>
  )
}

export default App
