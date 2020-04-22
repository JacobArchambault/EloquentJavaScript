function reverseArray(array){
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.unshift(array[i]);
	}
	return newArray;
};

let oldArray = [1, 2, 3, 4, 5];
reverseArray(oldArray);

function reverseArrayInPlace(array){
	let newArray = [];
	for (let arrayNumber of array)  {
		newArray.unshift(arrayNumber);
	}
	while (array.length > 0) {
		array.pop();
	}
	for (let number of newArray) {
		array.push(number);
	}
};

let myArray = [2,4,6,8,10];
reverseArrayInPlace(myArray);
console.log(myArray);