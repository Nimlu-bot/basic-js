const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
	/*	if (arr instanceof Array) {
	
			const transformArray = arr.slice();
			/*
					for (let i = 0; i <= transformArray.length; i++) {
						switch (transformArray[i]) {
							case '--discard-next': { transformArray.splice(i, 2, undefined, undefined) };
								break;
							case "--discard-prev": { transformArray.splice(i - 1, 2, undefined, undefined) };
								break;
							case "--double-next": { transformArray.splice(i, 1, undefined, transformArray[i + 1]) };
								break;
							case "--double-prev": { transformArray.splice(i - 1, 1, transformArray[i - 1], undefined) };
								break;
			
						}
			
					}
					let trArr = transformArray.filter(item => item !== undifined)
					return trArr;
			*/



	/*let i = 1;
	if (transformArray[0] == "--discard-prev" || transformArray[0] == "--double-prev") {
		transformArray[0] = undefined;
	}
	else if (transformArray[0] == "--double-next") {
		transformArray[0] = transformArray[1];

	}
	else if (transformArray[0] == "--discard-next") {
		transformArray[0] = undefined;
		transformArray[1] = undefined;
	}

	else if (i < transformArray.length) {
		for (i = 1; i <= transformArray.length - 1; i++) {
			switch (transformArray[i]) {
				case '--discard-next': { transformArray.splice(i, 2, undefined, undefined) };
					break;
				case "--discard-prev": { transformArray.splice(i - 1, 2, undefined, undefined) };
					break;
				case "--double-next": { transformArray.splice(i, 2, transformArray[i + 1], transformArray[i + 1]) };
					break;
				case "--double-prev": { transformArray.splice(i - 1, 2, transformArray[i - 1], transformArray[i - 1]) };
					break;
			}
		}
	}
	else if (transformArray[transformArray.length] == "--discard-next" || transformArray[transformArray.length] == "--double-next") {
		transformArray[transformArray.length] = undefined;

	}
	else if (transformArray[transformArray.length] == "--double-prev" && transformArray.length > 1) {
		transformArray[transformArray.length] = transformArray[transformArray.length - 1];
	}
	else if (transformArray[transformArray.length] == "--discard-prev" && transformArray.length > 1) {
		transformArray[transformArray.length] = undefined;
		transformArray[transformArray.length - 1] = undefined;
	}
	let trArr = transformArray.filter(item => item !== undefined);
	return trArr;
}

else throw ("Error");


*/

	/* if (!Array.isArray(arr)) throw Error
	let subArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {

			i += 1;
		} else if (arr[i] === '--discard-prev') {
			subArr.pop();
		} else if (arr[i] === '--double-next' && i < arr.length - 1) {
			subArr.push(arr[i + 1]);
		} else if (arr[i] === '--double-prev' && i > 0) {
			subArr.push(arr[i - 1]);
		}
		else if (arr[i] === '--double-next' && i == arr.length - 1) {

		}
		else if (arr[i] === '--double-prev' && (i == 0 || arr[i - 2] === '--discard-next')) {

		}
		else {
			subArr.push(arr[i]);
		}
	}
	return subArr
	*/
	throw new CustomError('Not implemented');
	// remove line with error and write your code here

};
