// file: modules/question.js - created at 2014-12-01, 01:39
/**
 * Represents a Question
 * @constructor
 * @param {string} title - The title of Question
 */
function Question(title) {
  // values
  this.title = title;
  this.answer = null;
  // methods
  this.toString = toString;
  this.setAnswer = setAnswer;
  this.getAnswer = getAnswer;
  this.equal = equal;
}

/**
 * Return the title of an question
 */
function toString() {
  return this.title;
}

/**
 * Set the answer of an question
 * @param value - The value of answer
 */
function setAnswer(value) {
  this.answer = value;

  return this;
}

/**
 * Get the answer of an question
 */
function getAnswer() {
  return this.answer || '';
}

/**
 * Compare the answer with:
 * @param value - value of user answer
 */
function equal(value) {
  return this.answer === value;
}

function questionHandler(question) {
  // start here with question.js
  return new Question(question);
}
questionHandler.Question = Question;

module.exports = exports = questionHandler;
