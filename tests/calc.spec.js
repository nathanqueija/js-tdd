import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/calc.js';

describe('Calc', () => {
  // smoke tests
  context('SMOKE TESTS', () => {

    it('should exists sum method', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists sub method', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists mult method', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exists div method', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  context('SUM', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  context('SUB', () => {
    it('should return 0 when sub(2,2)', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
  });

  context('MULT', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  context('DIVIDE', () => {
    it('should return 4 when div(8,2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return "not possible division by zero"', () => {
      expect(div(4, 0)).to.be.equal('not possible division by zero');
    });
  });
});
