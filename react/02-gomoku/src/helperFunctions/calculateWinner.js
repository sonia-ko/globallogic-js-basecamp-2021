function calculateWinner(squares, coords, potentialWinner) {
    const requiredMathing = 5;
    const directions = [
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
    ];

    const numberOfColumns = squares[0].length;
    const numberOfRows = squares.length;

    let currentSquare = { i: coords.i, y: coords.y };

    for (const direction of directions) {
        const winningCombination = [currentSquare];
        for (
            let matchedCircle = 1; matchedCircle <= requiredMathing; matchedCircle++
        ) {
            if (
                currentSquare.i + direction[0] < 0 ||
                currentSquare.i + direction[0] > numberOfRows - 1
            ) {
                break;
            }

            if (
                currentSquare.y + direction[1] < 0 ||
                currentSquare.y + direction[1] > numberOfColumns - 1
            ) {
                break;
            }

            const nextI = currentSquare.i + direction[0];
            const nextY = currentSquare.y + direction[1];

            if (squares[nextI][nextY] !== potentialWinner) {
                break;
            }

            currentSquare = { i: nextI, y: nextY };
            winningCombination.push(currentSquare);

            if (winningCombination.length === requiredMathing) {
                console.log(potentialWinner + " is won!!!");
                console.log(winningCombination);

                return [true, winningCombination];
            }
        }
    }

    return [false, false];
}

export default calculateWinner;