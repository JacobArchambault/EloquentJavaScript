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

function listToArray(list) {
	let array = [];
	let node = list;
	let i = 0;
	while (node) {
		array[i] = node.value;
		node = node.rest;
		i++; 		
	}
	// set first value;
	return array;
}

function prepend(myElement, list) {
	let newList = {value: myElement, rest: list};
	return newList;
}

function nth(list, index) {
	let node;
	if (index == 0) {
    	node = list;
	} else if (index == 1) {
		node = list.rest;
	} else if (index == 2) {
		node = list.rest.rest;
	}
	return node.value;
}



console.log(arrayToList([1, 2, 3]));

let myList = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
listToArray(myList);

prepend(0, myList);
nth(myList, 2);