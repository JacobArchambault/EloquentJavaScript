function deepEqual(a, b){
    if (a === null || b === null || typeof(a) !== 'object' || typeof(b) !=='object') {
    	return a === b;
    }
	else {
		let areEqual = true;
		
	    // Put object properties in an array
    	let aProperties = Object.keys(a); 
    	let bProperties = Object.keys(b);

    	// check Length to ensure objects have the same number of properties. Helps rule out cases where a's properties are only a subset of b's.
    	if (!areSameLength(aProperties, bProperties)) {
    		areEqual = false;
    	} else {
    		// Check that objects have same property values.
			for (let key of aProperties) {
				if (!deepEqual(a[key], b[key])) return false;
			}
    	}
		return areEqual;
	}
}
let obj1 = {a: {propName: "foo"}, b: true, c: 123};
let obj2 = {b: true, c: 123, a: {propName: "foo"}};
deepEqual(obj1, obj2);
	
function areSameLength(obj, ...args) {
	let sameLength = true;
	for (let arg of args) {
		if (obj.length !== arg.length) return false;
	}
	return sameLength;
}