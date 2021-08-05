import { useState } from "react";
import calculateWinner from "../../helperFunctions/calculateWinner.js";

import "./SideBar.css";

function SideBar(props) {
  const [movesList, setMovesList] = useState({
    btnContent: "Sort ↑",
    asc: true,
  });

  function renderMoves() {
    const moves = props.history.map((move, step) => {
      const desc = step
        ? `Go to move # ${step}: column: ${
            props.coordinates[step].column + 1
          }, row: ${props.coordinates[step].row + 1}`
        : "Go to the game start";

      const key = "button" + step;

      const btnBold = props.btnBoldIndex;

      return (
        <li key={key}>
          <button
            className={btnBold === step ? "bold" : "regular"}
            onClick={() => props.onClick(step)}
          >
            {desc}
          </button>
        </li>
      );
    });

    if (movesList.asc) {
      return moves;
    } else {
      return moves.reverse();
    }
  }

  // const nextPlayer = props.winnerObj.potentialWinner === "🟢" ? "🔴" : "🟢";
  // const winner = calculateWinner(
  //   props.winnerObj.squares,
  //   props.winnerObj.coords,
  //   props.winnerObj.potentialWinner
  // );

  // const gameStatus = winner
  //   ? `Winner: ${winner}`
  //   : `Next player: ${nextPlayer}`;

  // console.log(gameStatus);
  // console.log(props.nextPlayer);
  // console.log(props.currentWinner);

  function sorting() {
    const btnContent = movesList.asc ? "Sort  🠗 " : "Sort ↑ ";
    setMovesList({
      btnContent: btnContent,
      asc: !movesList.asc,
    });
  }

  return (
    <div className="sidebar">
      <div className="status">{props.status}</div>
      <div className="history-section">
        <h2>History Section</h2>
        <button className="sort-asc" onClick={sorting} className="sort-btn">
          {movesList.btnContent}
        </button>

        <ol>{renderMoves()}</ol>
      </div>
    </div>
  );
}

export default SideBar;
