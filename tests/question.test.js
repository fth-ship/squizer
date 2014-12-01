// file: tests/question.test.js - created at 2014-12-01, 01:40
var should = require('should');
var question = require('../modules/question');

describe('question', function () {
  var title = 'Quanto é 2 + 2?'
  var actual = question(title);

  it('should be instantiate an question', function () {
    actual.should.be.instanceof(question.Question);
  });

  it('should be toString equal question argument', function () {
    actual.toString().should.be.eql(title);
  });

  it('should be set answer', function () {
    actual.setAnswer(4).should.be.eql(actual);
  });

  it('should be get answer', function () {
    actual.getAnswer().should.be.eql(4);
  });

  it('should be equal to four using the method', function () {
    actual.equal(4).should.be.ok;
  });
});
