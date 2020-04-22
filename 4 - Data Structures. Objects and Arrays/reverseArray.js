// Function calls
let oldArray = [1, 2, 3, 4, 5];
reverseArray(oldArray);

let myArray = [2,4,6,8,10];
reverseArrayInPlace(myArray);
console.log(myArray);

// Functions
function reverseArray(array){
	let newArray = [];
	for (let arrayNumber of array) {
		newArray.unshift(arrayNumber);
	}
	return newArray;
};


function reverseArrayInPlace(array){
	let tempArray = reverseArray(array);
	emptyArray(array);
	pushAll(tempArray, array);
};

function emptyArray(array) {
	array.length = 0;
}

function pushAll(fromArray, toArray) {
	for (let number of fromArray) {
	toArray.push(number);
	}
}