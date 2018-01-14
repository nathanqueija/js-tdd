import { expect } from 'chai';
import { fizzbuzz } from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return Fizz when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
    expect(fizzbuzz(6)).to.be.equal('Fizz');
  });

  it('should return 0 when 03', () => {
    expect(fizzbuzz(0)).to.be.equal(0);
  });

  it('should return Buzz when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz');
    expect(fizzbuzz(10)).to.be.equal('Buzz');
  });

  it('should return FizzBuzz when multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzbuzz(45)).to.be.equal('FizzBuzz');
  });

  it('should return the number when  not multiple of 3 and 5', () => {
    expect(fizzbuzz(13)).to.be.equal(13);
  });
});
