const should = require('should');
const algo = require('../../index.js');

describe('Binary search', () => {
 it('should returnsearched number', () => {
const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6], 0);
should(elementIndex).be.eql(3);
 });
});
