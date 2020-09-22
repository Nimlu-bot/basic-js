const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	const activitiToFloat = parseFloat(sampleActivity);

	if ((typeof (sampleActivity) == "string") && sampleActivity && (activitiToFloat > 0 && activitiToFloat < 15)) {
		return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD));
	}
	else return false;


}



