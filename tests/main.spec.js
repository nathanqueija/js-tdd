const expect = require('chai').expect;

describe('Main', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });


  it('should have a size of four when push new value', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of two when pop value', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should remove 3 when use pop', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
});
