function every(array, predicate) {
    let isNonEmpty = (array.length > 0);
    let result = true;
    for (let obj of array) {
        if (!predicate(obj)) {
            result = false;
        }
    }
	return isNonEmpty && result;
}

function every2(array, predicate) {
    let isNonEmpty = (array.length > 0);
    let isTrueForEach = !array.some(element => !predicate(element));
	return isNonEmpty && isTrueForEach;
}

every([1, 2, 3], Number.isInteger);
every2([1, 2, "3"], Number.isInteger);