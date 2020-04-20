printCheckerBoard();
printCheckerBoardWith(5);

function printCheckerBoard() {
	for (let row = 1; row <= 8; row++) {
		if (row % 2 == 0) {
			console.log("# # # #");
		} else {
			console.log(" # # # #");
		}
	}
}

function printCheckerBoardWith(sideLength) {
	let evenString = "# "; 
	let oddString = " #";
	for (let row = 1; row <= sideLength; row++) {
		if (row % 2 == 0) {
			if (sideLength % 2 == 0) {
				console.log(evenString.repeat(sideLength/2));
			} 
			else {
				console.log(evenString.repeat(sideLength/2) + "#");
			}
		} 
		else {
			console.log(oddString.repeat(sideLength/2));
		}
	}
}