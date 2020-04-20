createNumberArray(2,29);
function createNumberArray(start, end) {
	let numberArray = [];
	for (i = start; i <= end; i++) {
		numberArray.push(i);
	}
	return numberArray;
}
createNumberArrayWithInterval(0, 28, 7);
function createNumberArrayWithInterval(start, end, interval) {
	let numberArray = [];
	if (interval > 0) {
		for (let i = start; i <= end; i+= interval) {
			numberArray.push(i);
		}
	} else {
		for (let i = start; i >= end; i+= interval) {
			numberArray.push(i);
		}
	}
	return numberArray;
}
