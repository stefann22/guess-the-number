import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberInput from "./components/NumberInput";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [gameStarted, setGameStarted] = useState(-1);
  const [numberReady, setNumberReady] = useState(-1);

  const handleButtonClick = () => {
    setGameStarted(gameStarted * -1);
  };
  const handleNumberChanged = (n: number): void => {
    if (n > 999 && n < 10000) {
      setNumberReady(n);
    } else {
      setNumberReady(0);
    }
  };
  const tryGuessNumber = () => {
    if (numberReady > 999 && numberReady < 10000) {
      console.log(numberReady);
    }
  };

  if (gameStarted == 1) {
    return (
      <>
        <h1>Guess the number</h1>
        <NumberInput
          numberLength={4}
          onInputChange={(v: number) => handleNumberChanged(v)}
        />

        <Button
          buttonEnabled={numberReady > 0}
          buttonText="Try"
          buttonType="primary"
          onClick={tryGuessNumber}
        ></Button>

        <br />
        <Button
          buttonEnabled={true}
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
          buttonEnabled
          buttonText="New game"
          buttonType="primary"
          onClick={handleButtonClick}
        ></Button>
      </>
    );
  }
}

export default App;
