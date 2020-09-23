const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

	calculateDepth(/*arr*/) {
		/*arr = this.arr;
		if (Array.isArray(arr)) {
			return 1 + arr.reduce((a, b) => Math.max(a, calculateDepth(b)), 0)
		}
		else return 0;*/
		throw new CustomError('Not implemented');
	}
};