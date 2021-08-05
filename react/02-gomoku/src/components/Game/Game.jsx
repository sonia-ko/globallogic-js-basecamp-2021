import { useState } from "react";
import GameBoard from "../GameBoard/GameBoard";
import "./Game.css";
import calculateWinner from "../../helperFunctions/calculateWinner";
import SideBar from "../Sidebar/SideBar";
import calculateDraw from "../../helperFunctions/calculateDraw";

function Game() {
  const numberOfColumns = 15;
  const numberOfRows = 15;

  const [gameState, setGameState] = useState({
    history: [
      {
        squares: Array(numberOfRows).fill(Array(numberOfColumns).fill(null)),
      },
    ],

    winners: [],
    currentWinner: null,
    stepNumber: 0,
    greenIsNext: true,
    current: {
      squares: Array(numberOfRows).fill(Array(numberOfColumns).fill(null)),
    },
    coordinates: Array(1).fill(null),
    btnBoldIndex: 0,
    order: "asc",
    status: `The player is  "🟢"`,
    winningSquares: false,
    gameOver: false,
  });

  let nextPlayer = gameState.greenIsNext ? "🟢" : "🔴";
  let status = `The player is ${nextPlayer}`;

  function jumpTo(step) {
    const current = gameState.history[step];
    const activeWinner = gameState.winners.some((el) => el !== null);

    let gameOver = false;

    if (
      gameState.history[step] ===
        gameState.history[gameState.history.length - 1] &&
      activeWinner
    ) {
      status = `The winner is ${step % 2 ? "🟢" : "🔴"}`;
      gameOver = true;
    } else {
      status = `The next player is ${step % 2 ? "🔴" : "🟢"}`;
    }

    setGameState((previousState) => {
      return {
        ...previousState,
        stepNumber: step,
        greenIsNext: step % 2 === 0,
        current: current,
        btnBoldIndex: step,
        status: status,
        gameOver: gameOver,
        winningSquares: false,
      };
    });
  }

  function handleClick(coords) {
    let winningSquares = false;
    if (gameState.gameOver) {
      return;
    }
    let history = gameState.history.slice(0, gameState.stepNumber + 1);
    let coordinates = gameState.coordinates.slice(0, gameState.stepNumber + 1);
    let current = history[history.length - 1];

    let winners = gameState.winners.slice(0, gameState.stepNumber + 2);

    const squares = current.squares.map((arr) => arr.slice());
    const potentialWinner = gameState.greenIsNext ? "🟢" : "🔴";

    if (squares[coords.i][coords.y]) {
      return;
    }

    squares[coords.i][coords.y] = potentialWinner;

    const winningStatus = calculateWinner(squares, coords, potentialWinner);
    const gameOver = winningStatus[0];
    winningSquares = winningStatus[1];
    const winner = gameOver ? potentialWinner : null;

    winners = winners.concat([winner]);

    coordinates.push({ row: coords.i, column: coords.y });

    let draw = false;

    let status = winner
      ? `The winner is ${potentialWinner}`
      : `The next player is ${potentialWinner === "🟢" ? "🟢" : "🔴"}`;

    if (!winner) {
      const draw = squares.flat().every((el) => el !== null);
      if (draw) {
        status = "There is a draw";
      }
    }

    history = history.concat([
      {
        squares: squares,
      },
    ]);

    current = history[history.length - 1];

    setGameState((previousState) => {
      return {
        ...previousState,
        current: current,
        history: history,
        stepNumber: history.length,
        greenIsNext: !gameState.greenIsNext,
        coordinates: coordinates,
        btnBoldIndex: 0,
        winners: winners,
        currentWinner: winner,
        status: status,
        winningSquares: winningSquares,
        gameOver: gameOver,
      };
    });
  }

  return (
    <div className="game">
      <div className="gameboard">
        <GameBoard
          squares={gameState.current.squares}
          numberOfColumns={numberOfColumns}
          numberOfRows={numberOfRows}
          winningSquares={gameState.winningSquares}
          numberOfColumnsAndRows={numberOfColumns}
          onClick={(coord) => {
            if (!gameState.gameover) {
              handleClick(coord);
            }
          }}
        ></GameBoard>
        <SideBar
          btnBoldIndex={gameState.btnBoldIndex}
          coordinates={gameState.coordinates}
          onClick={(step) => jumpTo(step)}
          history={gameState.history}
          squares={gameState.current.squares}
          status={gameState.status}
        ></SideBar>
      </div>
    </div>
  );
}

export default Game;
