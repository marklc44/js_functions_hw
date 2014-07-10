var numSquare = function(max) {
	var squares = [];

	for (var i = 0; i <= max; i++) {
		if (i * i < max) {
			squares.push(i * i);
		}
	}
	return squares;
};

console.log(numSquare(10));