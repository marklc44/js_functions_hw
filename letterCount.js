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

// Strip special chars 2
// this is a funky looking condition, but it works
// without having to save all special chars in an array or string

var stripSpecialChars2 = function(str) {
	var stripped = '';

	for (var i = 0; i < str.length; i++) {
		if ((str[i].charCodeAt(0) < 90 && str[i].charCodeAt(0) > 65) || (str[i].charCodeAt(0) < 122 && str[i].charCodeAt(0) > 96) || (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 90)) {
			stripped += str[i];
		}
	}
	return stripped;

};

console.log(stripSpecialChars2('app[le'));

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

