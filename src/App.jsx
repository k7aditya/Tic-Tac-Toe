import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Components/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [winningMessage, setWinningMessage] = useState("Tic-Tac-Toe");
  const [winningPatternIndex, setWinningPatternIndex] = useState(null);

  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      setWinningMessage(`${result.winner} won`);
    }
  }, [result]);

  const checkIfTie=()=>{
    let filled=true;
    board.forEach((square)=>{
      if(square==""){
        filled=false;
      }
    })
    if(filled){
      setResult({winner: "No one", state: "Tie"})
    }

  }

  const restartGame=()=>{
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setResult({ winner: "none", state: "none" });
    setWinningMessage("Tic-Tac-Toe");
    setWinningPatternIndex(null); 
  }
  const checkWin = () => {
    Patterns.forEach((currPattern, index) => {
      const firstPlayer = board[currPattern[0]];
      let foundWinningPattern = true;
      if (firstPlayer == "") return;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
        setWinningPatternIndex(index);
      }
    });
  };
  const chooseSquare = (square) => {
    if (result.state!== "none") {
    return; // Exit the function early if the game has ended
  }
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };
  return (
    <div className="App">
      <div className="title">
        <h1>{winningMessage}</h1>
        <div className="centr">
          <button onClick={restartGame}>Restart</button>
        </div>
      </div>

      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(0)
            }
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(1)
            }
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(2)
            }
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(3)
            }
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(4)
            }
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(5)
            }
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(6)
            }
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(7)
            }
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
            isWinningSquare={
              winningPatternIndex !== null &&
              Patterns[winningPatternIndex].includes(8)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
