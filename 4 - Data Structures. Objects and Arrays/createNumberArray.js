function createNumberArray(start, end) {
	let numberArray = [];
	for (i = start; i <= end; i++) {
		numberArray.push(i);
	}
	return numberArray;
}
createNumberArray(2,29);

function createNumberArrayWithInterval(start, end, interval) {
	let numberArray = [];
	let i = start; 
	let condition;
	
	// Set default interval if interval is zero."
	if (interval == 0) {
		console.log("Interval cannot be zero");
		if (start <= end) {
			interval = 1;
			console.log("The interval was set to 1");
		} else {
			interval = -1;
			console.log("The interval was set to -1");
		}
	}

	if (interval > 0) {
	    condition = () => (i <= end);
	} else {
	    condition = ()=>(i >= end);
	}
	
    while (condition()) {
        numberArray.push(i);
        i+= interval;
    }
	return numberArray;
}
createNumberArrayWithInterval(0, 14, 7);