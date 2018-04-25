const should = require('should');
const algo = require('../../index.js');

describe('Binary heap', () => {
	it('Should add el to heap', () => {
		const heap = new algo.BinaryHeap();
		heap.add(2);
		should(heap.content[0]).be.eql(2);
	});
});

describe('Binary heap', () => {
	it('Should add el to heap', () => {
		const heap = new algo.BinaryHeap();
		const array = [2, 8, 5, 19, 3, 11, 4, 5, 77];
		const resultArray = [2, 3, 4, 5, 8, 11, 5, 19, 77];
		let match = true;
		array.forEach(el => {
			heap.add(el);
		});
		for (let i = 0; i < resultArray.length; i += 1) {
			if (resultArray[i] !== heap.content[i]) {
				match = false;
				break;
			}
		}
		console.log(heap.content);
		should(match).be.eql(true);
	});
});