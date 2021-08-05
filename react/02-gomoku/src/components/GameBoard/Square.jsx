import "./Square.css";

//🔴 🟢

function Square(props) {
  let className = "square regular";

  if (props.isHighlighted) {
    className = "square winning";
  }

  return (
    <div className={className} onClick={props.onClick}>
      <div>{props.value}</div>
    </div>
  );
}

export default Square;
