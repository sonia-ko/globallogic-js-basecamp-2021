import "./GameBoard.css";
import Square from "./Square";

function GameBoard(props) {
  let style = `repeat(${props.numberOfColumnsAndRows}, 0.01fr)`;

  function renderSquares() {
    let value = 0;
    const squareEl = [];

    for (let i = 0; i < props.numberOfRows; i++) {
      for (let y = 0; y < props.numberOfColumns; y++) {
        let secNum = value;
        let isHighlighted = false;
        if (props.winningSquares) {
          if (
            (i === props.winningSquares[0].i &&
              y === props.winningSquares[0].y) ||
            (i === props.winningSquares[1].i &&
              y === props.winningSquares[1].y) ||
            (i === props.winningSquares[2].i &&
              y === props.winningSquares[2].y) ||
            (i === props.winningSquares[3].i &&
              y === props.winningSquares[3].y) ||
            (i === props.winningSquares[4].i && y === props.winningSquares[4].y)
          ) {
            isHighlighted = true;
            console.log(props.winningSquares[0].i);
            console.log(props.winningSquares[0].y);
          }
        }
        const iForPassing = i;
        const yForPassing = y;

        squareEl.push(
          <Square
            onClick={() => props.onClick({ secNum, i, y })}
            key={value + "square"}
            value={props.squares[iForPassing][yForPassing]}
            column={y}
            row={i}
            isHighlighted={isHighlighted}
            winningSquares={props.winningSquares}
          ></Square>
        );
        value++;
      }
    }

    return squareEl;
  }

  return (
    <div className="board">
      <div className="board-container" style={{ gridTemplateColumns: style }}>
        {renderSquares()}
      </div>
    </div>
  );
}

export default GameBoard;
