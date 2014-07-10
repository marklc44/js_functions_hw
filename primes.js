var primeChecker = function(num) {

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;

		}
	}
	return true;
};

var primes = function(max) {

	var primes = [];

	for (i = 0; i < max; i++) {
		if (primeChecker(i)) {
			primes.push(i);
		}
	}
	return primes;
};

console.log(primes(10));