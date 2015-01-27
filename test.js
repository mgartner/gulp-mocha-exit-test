var chai = require('chai');
var expect = chai.expect;

describe('a test', function () {

  it('true should be true', function () {
    expect(true).to.eql(true);
  });

  it('true should be false', function () {
    expect(true).to.eql(false);
  });

});
