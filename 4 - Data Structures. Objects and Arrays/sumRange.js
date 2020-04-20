sum(2, 6);
function sum(start, end) {
	let currentNumber = start;
	let sum = 0;
	if (start > end) {
		console.log("To sum the range, your starting number must be less than or equal to your ending number");
	}
	else {
		while (currentNumber <= end) {
			sum += currentNumber;
			currentNumber++;
		}		
	}
	return sum;
}