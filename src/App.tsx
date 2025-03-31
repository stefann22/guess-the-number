import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberInput from "./components/NumberInput";
import GuessList from "./components/GuessList";
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

  var triesList =  [
    {    item : 1234,    fixed : 1,    loose :2  },
    {    item : 4322,    fixed : 0,    loose :1  },
    {    item : 5432,    fixed : 2,    loose :0  }
  ]
;

  if (gameStarted == 1) {
    return (
      <>
        <div className="container h-100">
          <h1>Guess the number</h1>
          <div className="row">
            <div className="col-12">
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

            </div>
            <div className="col-12">
              <Button
                buttonEnabled={true}
                buttonText="Stop"
                buttonType="danger"
                onClick={handleButtonClick}
              ></Button>
            </div>
          </div>
        </div>
        <div className="container h-100">
            <GuessList guesses={triesList} />
          </div>
      </>
    );
  } else {
    return (
      <>
      <div className="container h-100">
        <h1>Guess the number</h1>
        <Button
          buttonEnabled
          buttonText="New game"
          buttonType="primary"
          onClick={handleButtonClick}
        ></Button>
        </div>
      </>
    );
  }
}

export default App;
