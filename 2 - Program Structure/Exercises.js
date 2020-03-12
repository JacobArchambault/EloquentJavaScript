makeHashtagTriangle();
fizzBuzz();
printCheckerBoard();
printCheckerBoardWith(5);

function makeHashtagTriangle() {
	let hashes = "";
	for (let i = 0; i < 7; i++) {
		hashes += "#";
		console.log(hashes);
	}
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

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