const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

	let { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;


	concatAddition = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

	return new Array(repeatTimes).fill(str + concatAddition).join(separator);
};
	//throw new CustomError('Not implemented');
	// remove line with error and write your code here
