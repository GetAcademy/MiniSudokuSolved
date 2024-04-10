function validateSudokuboard(board) {
    if (board.length != 16) return 'ugyldig brett, feil lengde';
    if (hasInvalidChars(board)) return 'ugyldig brett, ugyldig tegn';
    const isCompleteBoard = !board.includes(' ');
    if(hasDuplicateInRow(board)) return isCompleteBoard ? 'helt utfylt, feil i rad' : 'delvis utfylt, feil i rad';
    if(hasDuplicateInCol(board)) return isCompleteBoard ? 'helt utfylt, feil i kolonne' : 'delvis utfylt, feil i kolonne';
    if(hasDuplicateInBox(board)) return isCompleteBoard ? 'helt utfylt, feil i firkant' : 'delvis utfylt, feil i firkant';
    return isCompleteBoard ? 'helt utfylt, ingen feil' : 'delvis utfylt, ingen feil';
}

function hasDuplicateInCol(board) {
    const col1 = getCells(board, 0, 4, 8, 12);
    const col2 = getCells(board, 1, 5, 9, 13);
    const col3 = getCells(board, 2, 6, 10, 14);
    const col4 = getCells(board, 3, 7, 11, 15);
    const hasDuplicate = hasDuplicates(col1)
        || hasDuplicates(col2)
        || hasDuplicates(col3)
        || hasDuplicates(col4);
    return hasDuplicate;
}

function hasDuplicateInBox(board) {
    const row1 = getCells(board, 0, 1, 4, 5);
    const row2 = getCells(board, 2, 3, 6, 7);
    const row3 = getCells(board, 8, 9, 12, 13);
    const row4 = getCells(board, 10, 11, 14, 15);
    const hasDuplicate = hasDuplicates(row1)
        || hasDuplicates(row2)
        || hasDuplicates(row3)
        || hasDuplicates(row4);
    return hasDuplicate;
}
function hasDuplicateInRow(board) {
    const row1 = getCells(board, 0, 1, 2, 3);
    const row2 = getCells(board, 4, 5, 6, 7);
    const row3 = getCells(board, 8, 9, 10, 11);
    const row4 = getCells(board, 12, 13, 14, 15);
    const hasDuplicate = hasDuplicates(row1)
        || hasDuplicates(row2)
        || hasDuplicates(row3)
        || hasDuplicates(row4);
    return hasDuplicate;
}

function hasInvalidChars(sudoboardString) {
    const validChars = '1234 ';
    for (let character of sudoboardString) {
        if (!validChars.includes(character)) return true;
    }
    return false;
}

function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}

function getCells(board, index1, index2, index3, index4) {
    return [
        board[index1],
        board[index2],
        board[index3],
        board[index4],
    ];
}