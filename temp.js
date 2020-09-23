
function calculateDepth(arr) {


	if (Array.isArray(arr)) {
		return 1 + arr.reduce(function (a, b) { return Math.max(a, calculateDepth(b)); }, 0)
	}
	else return 0;

}
console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
