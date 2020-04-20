getParityRecursive(32);

function getParityRecursive(number) {
	let parity;
	if (number == 0) {
		parity = "even";
	} else if (number == 1) {
		parity = "odd";
	} else {
		parity = getParityRecursive(Math.abs(number - 2));
	}
	return parity;
}