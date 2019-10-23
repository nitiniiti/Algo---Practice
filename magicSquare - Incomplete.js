function formingMagicSquare(s, minimumChanges = 0) {
    minimumChanges = 0;
    let newMagicSquare = s;
    let magicSquareStatus = checkMagicSquare(s);
    if (magicSquareStatus) {
        return minimumChanges;
    } else {
        newMagicSquare = updateMagicSquare(newMagicSquare);
        minimumChanges++;
        formingMagicSquare(newMagicSquare, minimumChanges);
    }
}

function checkMagicSquare(s) {
    let constant = n * (n * n + 1) / 2;
}

function updateMagicSquare(s, a, b) {

}

let result = formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);
console.log(result);