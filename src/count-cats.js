const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let count = 0
	if (arr instanceof Array) {
		for (let subArr of arr) {
			for (let elem of subArr) {
				if (elem === "^^") {
					count++;
				}
			}
		}
		return count;
	};

};
