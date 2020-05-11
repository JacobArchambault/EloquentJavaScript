function arrayToList(array) {
	// declare list
	let list = {value: null, rest: null};
	let node = null;
	// declare and initialize decrementer
	let d = array.length - 1;
	
	// Prepend nodes to list until reaching the beginning of array.
	while (d >= 0) {
		// set value of list to element at array index.
		list = {value: array[d], rest: node};
		// set node value to entire list.
		node = list;
		// decrement.
		d--;
	}
	return list;
}
console.log(arrayToList([1, 2, 3]));
