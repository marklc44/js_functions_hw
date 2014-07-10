// Count Letters

// Strip special characters

var stripSpecialChars = function(str) {
	var specialChars = ['.',',',';',':','-','?','@','*','(',')','[',']','%','&','#'];
	var stripped = '';

	for (var i = 0; i < str.length; i++) {
		if (specialChars.indexOf(str[i]) < 0) {
			stripped += str[i];
		}
	}
	return stripped;
};

// Count letters

var letterCount = function(str) {
	var str = stripSpecialChars(str.toLowerCase());
	var count = {};

	for (var i = 0; i < str.length; i++) {

		if (count[str[i]]) {
			count[str[i]]++;
		} else {
			count[str[i]] = 1;
		}
	}
	return count;
}

var apple = letterCount('app.le');
console.log(apple);

