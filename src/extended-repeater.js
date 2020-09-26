const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let resultString = str;
	let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
	if (Number.isInteger(repeatTimes)) {
		for (let i = 1; i <= repeatTimes; i++) {
			resultString = resultString + str.toString();
			if (Number.isInteger(additionRepeatTimes)) {
				for (let j = 1; j <= repeatTimes; j++) {
					resultString = resultString + addition.toString();
					if (j < additionRepeatTimes) { resultString = resultString + additionSeparator.toString() }

				}
			}
			if (i < repeatTimes) { resultString = resultString + separator.toString() }
		}
		return resultString;
	}

	//throw new CustomError('Not implemented');
	// remove line with error and write your code here
};
