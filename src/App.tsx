import { useRef } from "react"
import Input from "./components/Input"
function App() {
  const input = useRef<HTMLInputElement>(null)
  console.log(input)
  return (
    <main>
      <Input label="test" id="test" ref={input} />
    </main>
  )
}

export default App
