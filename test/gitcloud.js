const chai = require('chai');
const gitCloud = require('../gitcloud');

function checkIndex(index) {
  const containsCat = index.some(element => {
    return element.url.includes('/cat');
  });

  chai.expect(containsCat).to.be.equal(true, 'One of the paths should contain"/cat"');
}

describe('GitCloud Client', function () {
  this.timeout(10000);

  it('Gets the index', function (done) {
    gitCloud('https://jiahaog.github.io/gitcloud')
    .then(fileIndex => {
      checkIndex(fileIndex);
      done()
    })
    .catch(done);
  })

});
