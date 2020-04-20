countBs("BbBwerewBbB");
countChars("BbBwerewBbB", "B");

function countBs(string) {
    let numberOfBs = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            numberOfBs++;
        }
    }
    return numberOfBs;
}


function countChars(string, charToCount) {
    let charCount = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == charToCount) {
            charCount++;
        }
    }
    return charCount;
}