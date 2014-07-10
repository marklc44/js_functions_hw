// -- Merge --//
var arr = [3,6,11];
var arr2 = [2,4,5,8,9];

var result = [];

var merge = function(arr, arr2) {
	for (var i = 0, j = 0, k = 0; i < arr.length + arr2.length; i++) {

		if (arr[j] < arr2[k] || arr2[k] === undefined || arr[j] === undefined) {
			result[i] = arr[j];
			j++;
		} else {
			result[i] = arr2[k];
			k++;
		}
	}
	return result;
};

console.log(merge(arr, arr2));

console.log("-------------------");

// mergeArr 2

var mergeWhile = function(arr, arr2) {

	var result = [];
	var small;

	while(arr.length > 0 && arr2.length > 0) {
		if (arr[0] < arr2[0]) {
			small = arr.shift();

		} else {
			small = arr2.shift();
			
		}
		result.push(small);
	}

	// returning only working inside the if statement
	// because concat does not change the results array
	// but rather returns a concatenation of the two arrays
	// which must be saved in its own variable to be returned.
	
	if (arr.length > 0) {	
		 	return result.concat(arr);
		} else {
			return result.concat(arr2);
		}
};

console.log(mergeWhile(arr, arr2));

console.log("-------------------");

// mergeArr 3

var arr = [3,6,11];
var arr2 = [2,4,5,8,9];

var mergeFor = function(arr, arr2) {
	var result = [], smallest;
	var len = arr.length + arr2.length;

	for (var i = 0, j = 0, k = 0; i < arr2.length + arr.length || j + k < len - 1; i++) {

		if (arr[0] < arr2[0]) {
			smallest = arr.shift();
			j++;
		} else {
			smallest = arr2.shift();
			k++;
		}
		result.push(smallest);
	} // end for

	if (arr.length > 0) {
		return result.concat(arr);
	} else {
		return result.concat(arr2);
	} // end else

};

console.log(mergeFor(arr, arr2));








