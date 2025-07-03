
import { createElement } from "react"
import { createRoot } from "react-dom/client"

function MainContent() {
  return(
    <h1>Hello from the component!</h1>
  );
}

function App() {

  return (
    <>
        <MainContent />
    </>
  )
}

export default App
