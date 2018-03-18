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
   describe('Balanced test', () => {
    it('should return  true, its balanced, enter chars, symbol, digit', () => {
   const elementIndex1 = olo.balancer("!!{hggjgj}22(sdfsd[33]asdasf)");
   should(elementIndex1).be.eql(true);
    });
   });
   describe('Balanced test', () => {
    it('should return  false, its not balanced, enter 1 parentheses', () => {
   const elementIndex1 = olo.balancer("}");
   should(elementIndex1).be.eql(false);
    });
   });
   describe('Balanced test', () => {
    it('should return  true, missing any data', () => {
   const elementIndex1 = olo.balancer(" ");
   should(elementIndex1).be.eql(true);
    });
   });

   
