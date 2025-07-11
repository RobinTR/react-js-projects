import "./App.css";
import { useState } from "react";
import WindowTracker from "./WindowTracker.jsx";

function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <main className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}

export default App;
