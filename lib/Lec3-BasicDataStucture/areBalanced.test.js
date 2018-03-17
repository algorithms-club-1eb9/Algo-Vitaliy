const should = require('should');
const olo = require('./index.js')

describe('Balanced test', () => {
 it('should return  true, its balanced', () => {
const elementIndex1 = olo.balancer("{}([])");
should(elementIndex1).be.eql(true);
 });
});
describe('Balanced test', () => {
    it('should return  false, its not balanced', () => {
   const elementIndex1 = olo.balancer("{}}([])");
   should(elementIndex1).be.eql(false);
    });
   });
   
