function deepEqual(a, b){
    if (a === null || b === null || typeof(a) !== 'object' || typeof(b) !=='object') {
    	return a === b;
    }
	else {
	    // Put object properties in an array
    	let aProperties = Object.keys(a); 
    	let bProperties = Object.keys(b);

    	// check Length to ensure objects have the same number of properties
    	if (!areSameLength(aProperties, bProperties)) return false;

        for (let key of aProperties) {
        	if (a[key] !== b[key]) return false;
        }
        return true;
	}
}
let obj1 = {a: "foo", b: true, c: 123};
let obj2 = {b: true, c: 123, a: "foo"};
deepEqual(obj1, obj2);
	
function areSameLength(obj, ...args) {
	let sameLength = true;
	for (let arg of args) {
		if (obj.length !== arg.length) return false;
	}
	return sameLength;
}