const CustomError = require("../extensions/custom-error");

const chainMaker = {

	chain: [],
	getLength() {

		return this.chain.length;
	},
	addLink(value) {

		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if ((position < 1) || (position > this.chain.length)) {
			this.chain = [];
			throw new Error()
		};
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
		const endChain = this.chain;
		this.chain = [];
		return endChain.join('~~');

		// remove line with error and write your code here
	}

};

module.exports = chainMaker;
