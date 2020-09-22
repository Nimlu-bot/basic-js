const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;

	return teamName = members.filter(member => typeof (member) === "string").map(item => item.trim().substring(0, 1).toUpperCase()).sort().join("");

};
