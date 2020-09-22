const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		arr = this.arr;
		function findDepth(arr) {
			return Array.isArray(arr) ? 1 + arr.reduce(function (a, b) {
				return Math.max(a, findDepth(b));
			}, 0) : 0;
		}


		throw new CustomError('Not implemented');
		// remove line with error and write your code here
	}
};