const should = require('should');
const algo = require('../../index.js');

describe('Binary search', () => {
 it('should returnsearched number', () => {
const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
should(elementIndex).be.eql(1);
 });
});

    describe('Binary search', () => {
        it('should return first index in Array, searched item on first pos', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
            should(elementIndex).be.eql(0);
        });
    });
    describe('Binary search', () => {
        it('should return last index in Array, searched item on last pos', () => {
            const elementIndex = algo.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
            should(elementIndex).be.eql(9);
        });
    });
