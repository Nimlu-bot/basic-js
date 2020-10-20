const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


	constructor(Direct) {
		this.Direct = (Direct === false);
	}


	encrypt(string, key) {
		if (!string || !key) throw new Error;
		key = key.repeat(Math.ceil(string.length / key.length));
		let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = "";
		let keyIndex = 0;
		for (let i = 0; i < string.length; i++) {
			if (/^[a-zA-Z]{1}$/.test(string[i])) {
				result += alphabet.charAt((alphabet.indexOf(string.charAt(i)) + alphabet.indexOf(key.charAt(i - keyIndex))) % alphabet.length);
			}
			else {
				result += string[i];
				keyIndex++;
			};

		}
		result = this.Direct ? [...result].reverse().join('') : result;
		return result.toUpperCase();
		//throw new CustomError('Not implemented');
		// remove line with error and write your code here
	}
	decrypt(string, key) {
		if (!string || !key) throw new Error;
		key = key.repeat(Math.ceil(string.length / key.length));
		let keyIndex = 0;
		let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = "";
		for (let i = 0; i < string.length; i++) {
			if (/^[a-zA-Z]{1}$/.test(string[i])) {
				result += alphabet.charAt(((alphabet.indexOf(string.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i - keyIndex))) % alphabet.length);
			}
			else {
				result += string[i];
				keyIndex++;
			};
		}
		result = this.Direct ? [...result].reverse().join('') : result;
		return result.toUpperCase();

	}
}

module.exports = VigenereCipheringMachine;
