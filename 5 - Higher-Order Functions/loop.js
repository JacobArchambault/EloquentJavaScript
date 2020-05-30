function loop(value, testFunction, body, updateFunction) {
	while (testFunction(value)) {
		body();
		updateFunction(value);

	}
	return value;
}
let i = 0;
loop(i, () => i < 10, () => console.log("Hello"), ()=> i++);