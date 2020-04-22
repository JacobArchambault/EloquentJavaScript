function reverseArray(array){
	let newArray = [];
	for (let arrayNumber of array) {
		newArray.unshift(arrayNumber);
	}
	return newArray;
};

let oldArray = [1, 2, 3, 4, 5];
reverseArray(oldArray);

function reverseArrayInPlace(array){
	let tempArray = reverseArray(array);
	emptyArray(array);
	pushAll(tempArray, array);
};

let myArray = [2,4,6,8,10];
reverseArrayInPlace(myArray);
console.log(myArray);

function emptyArray(array) {
	while (array.length > 0) {
		array.pop();
	}	
}

function pushAll(fromArray, toArray) {
	for (let number of fromArray) {
	toArray.push(number);
	}
}