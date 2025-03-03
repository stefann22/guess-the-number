import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberInput from "./components/NumberInput";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [gameStarted, setGameStarted] = useState(-1);

  const handleButtonClick = () => {
    setGameStarted(gameStarted * -1);
  };

  if (gameStarted == 1) {
    return (
      <>
        <h1>Guess the number</h1>
        <NumberInput />
        <Button
          buttonText="Stop"
          buttonType="danger"
          onClick={handleButtonClick}
        ></Button>
      </>
    );
  } else {
    return (
      <>
        <h1>Guess the number</h1>
        <Button
          buttonText="New game"
          buttonType="primary"
          onClick={handleButtonClick}
        ></Button>
      </>
    );
  }
}

export default App;
