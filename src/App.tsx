import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Guess the number</h1>
      <Button buttonText="New game" buttonType="primary"></Button>
    </>
  );
}

export default App;
