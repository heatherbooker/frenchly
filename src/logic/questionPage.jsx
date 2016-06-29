const React = require('react');
const Question1 = require('../components/Question/Question1.jsx');
const Question2 = require('../components/Question/Question2.jsx');

exports.findCategory = function(categoryParam) {
  let category = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  if (category === 'Mixitup') {
    category = 'Mix it up';
  }
  return category;
}

exports.findAreaName = function(continentCode) {
  let area = '';
  if (continentCode === 'randomize') {
    area = 'Random';
  } else {
    area = {
      na: 'North America',
      sa: 'South America',
      af: 'Africa',
      eu: 'Europe',
      as: 'Asia',
      oc: 'Oceania'
    }[continentCode];
  }
  return area;
}

exports.findQuestionComponent = function(questionId) {
  let currentQuestion = () => {};
  if (questionId % 2 === 0) {
    currentQuestion = function (question) {
      return (
        <Question1
          question={question}
          onResponseChange={this.manageAnswerBox.bind(this)}
          answerBoxState={this.state.answerBoxState}
          response={this.state.response}
        />
      );
    };
  } else {
    currentQuestion = function (question) {
      return (
        <Question2
          question={question}
          onResponseChange={this.manageAnswerBox.bind(this)}
          enabledState={this.state.answerBoxState}
          response={this.state.response}
        />
      );
    };
  }
  return currentQuestion;
}
