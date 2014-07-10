// -- Silly Squad -- //

var sillySum = function(arr) {

	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i] * i;
	}
	return sum;
};

console.log(sillySum([1,2,3,4]));
