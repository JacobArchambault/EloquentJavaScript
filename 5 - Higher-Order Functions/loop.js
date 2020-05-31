function loop(value, testFunction, updateFunction, body, ...args) {
	while (testFunction(value)) {
		body(args);
		value = updateFunction(value);
	}
	return value;
}
loop(0, i => i < 10, (i) => i + 1, console.log, "Hello");