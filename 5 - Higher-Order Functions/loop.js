function loop(value, testFunction, updateFunction, body) {
	while (testFunction(value)) {
		body(value);
		value = updateFunction(value);
	}
	return value;
}
loop(0, i => i < 10, (i) => i + 1, console.log);
