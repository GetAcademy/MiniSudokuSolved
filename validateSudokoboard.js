function validateSudokuboard(sudoboardString) {
    if (sudoboardString.length != 16) return 'ugyldig brett, feil lengde';
    return 'helt utfylt, ingen feil';
}