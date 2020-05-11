function arrayToList(array) {
	// initialize node and declare list
	let node = null;
	let list;
	for (d = array.length - 1; d >= 0; d--) {
		// set value of list to element at array index.
		list = {value: array[d], rest: node};
		// set node value to entire list.
		node = list;		
	}
	return list;
}
console.log(arrayToList([1, 2, 3]));