import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import NumberInput from "./components/NumberInput";
import GuessList from "./components/GuessList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [gameStarted, setGameStarted] = useState(-1);
  const [numberReady, setNumberReady] = useState(0);
  const [triesList, setTriesList] = useState([
    {
       item: 'number',
        fixed: 'fixed',
        loose: 'loose'
    }
  ]);
  const [secretNumber, setSecretNumber] = useState(0);

  const startGame = () => {
    setGameStarted(1);
    setSecretNumber( Math.floor(Math.random() * 9000) + 1000);
    console.log('secretNumber: ' + secretNumber);

    setTriesList([
      {
        item: 'number',
        fixed: 'fixed',
        loose: 'loose'
      }
    ]);
  
  };
  const stopGame = () => {
    setGameStarted(-1);
    setTriesList([
      {
        item: 'number',
        fixed: 'fixed',
        loose: 'loose'
      }
    ]);
  };
  const handleNumberChanged = (n: number): void => {
      setNumberReady(n);
  };

  const tryGuessNumber = () => {
    if (numberReady > 999 && numberReady < 10000) {
      var tmpTriesList = [...triesList];
      var fixed = 0;
      var loose = [];
      for (var i = 0; i < 4; i++) {
        console.log('secretNumber: ' + secretNumber);
        if(numberReady.toString()[i] == secretNumber.toString()[i]) {
          fixed++;
        }
        for (var j = 0; j < 4; j++) {
          if(numberReady.toString()[i] == secretNumber.toString()[j]) {
            loose.push(numberReady.toString()[i]);
            break;
          }
        }
      }
      var looseSet = new Set(loose);
      loose = [...looseSet];
      console.log("fixed: " + fixed);
      console.log("loose: " + loose.length);
      
      tmpTriesList.push({
        item: numberReady.toString(),
        fixed: fixed.toString(),
        loose: loose.length.toString()
      });
      setTriesList(tmpTriesList);
      setNumberReady(0)
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };


  if (gameStarted == 1) {
    return (
      <>
        <div className="container h-100">
          <h1>Guess the number</h1>
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <NumberInput
                numberLength={4}
                numberReady={numberReady}
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
                onClick={stopGame}
              ></Button>
            </div>
          </div>
          </form>
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
          onClick={startGame}
        ></Button>
        </div>
      </>
    );
  }
}

export default App;
