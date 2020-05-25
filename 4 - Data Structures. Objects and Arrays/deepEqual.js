let obj1 = {a: {propName: "foo"}, b: true, c: 123};
let obj2 = {b: true, c: 123, a: {propName: "foo"}};
deepEqual(obj1, obj2);

function deepEqual(a, b){
	// Directly compare nulls and non-objects for equality.
    if (a === null || b === null || typeof(a) !== 'object' || typeof(b) !=='object') {return a === b;}
	
	// To allow easy iteration over them in order to check their quantity, then recursively check their values for equality, put object property keys into arrays.
	let aProperties = Object.keys(a); 
	let bProperties = Object.keys(b);

	// check length to ensure objects have the same number of properties. Helps rule out cases where a's property keys with their values constitute a subset of b's.
	if (!areSameLength(aProperties, bProperties)) {return false;} 

	// Recursively check that objects have same property values.
	let areEqual = true;
	for (let key of aProperties) {
		if (!deepEqual(a[key], b[key])) return false;
	}
	return areEqual;
}
	
function areSameLength(obj, ...args) {
	let sameLength = true;
	for (let arg of args) {
		if (obj.length !== arg.length) return false;
	}
	return sameLength;
}