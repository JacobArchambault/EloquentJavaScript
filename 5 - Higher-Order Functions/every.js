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

every([1, 2, "3"], Number.isInteger);