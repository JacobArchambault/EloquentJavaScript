function flatten(myArray) {
	return myArray.reduce((a, b) => a.concat(b));
}
flatten([[1, 2], [7, [8, 9]], [3, 4],[5, 6]]);
