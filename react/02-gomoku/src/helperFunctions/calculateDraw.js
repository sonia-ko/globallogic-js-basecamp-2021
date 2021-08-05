function calculateDraw(squares) {
    const squaresArr = squares.flat();
    console.log(squaresArr);
    let draw = squaresArr.some((el) => el !== null);
    console.log(draw);
    return draw;
}

export default calculateDraw;