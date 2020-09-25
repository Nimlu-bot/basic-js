
// function calculateDepth(arr) {


// 	if (Array.isArray(arr)) {
// 		return 1 + arr.reduce(function (a, b) { return Math.max(a, calculateDepth(b)); }, 0)
// 	}
// 	else return 0;

// }
// console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));

const chainMaker = {

	chain: [],
	getLength() {

		return this.chain.length;
	},
	addLink(value) {

		this.chain.push('( ' + value + ' )');
		return this;
	},
	removeLink(position) {
		if ((position < 1) || (position > this.chain.length)) throw new Error();
		this.chain = this.chain.filter(elem => elem !== this.chain[position - 1]);
		return this;
		// remove line with error and write your code here
	},
	reverseChain() {
		this.chain = this.chain.reverse();
		return this;

		// remove line with error and write your code here
	},
	finishChain() {
		return this.chain.join('~~');

		// remove line with error and write your code here
	}

};


console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());