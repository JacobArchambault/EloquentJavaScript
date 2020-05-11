function arrayToList(array) {
	// Create list
	let list = {value: null, rest: null};
	// set decrementer
	let d = array.length - 1;
	// set value to array number.
	list.value = array[d];
	// reset decrementer
	d--;
	// Prepend node to list
	let node = {value: array[d], rest: list};
	d--;
	let node2 = {value: array[d], rest: node};

	return node2;
}
console.log(arrayToList([1, 2, 3]));