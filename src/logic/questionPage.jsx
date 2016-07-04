const React = require('react');
const Question1 = require('../components/Question/Question1.jsx');
const Question2 = require('../components/Question/Question2.jsx');
//country names and nationalities in english and french
const data = require('json!../assets/nations_outfile.json');

//keep all countries with nationality data in an array
const nationalityData = {};
for (var continent in data) {
  nationalityData[continent] = [];
  data[continent].forEach((country) => {
    if (typeof country.nationalities !== 'undefined') {
      nationalityData[continent].push(country);
    }
  });
}

const questionsUsed = [];

const pickRandomContinent = function() {
  let continent = '';
  let count = 0;
  for (var prop in data){
    if (Math.random() < 1/++count) {
      continent = prop;
    }
  }
  return continent;
}

const markQuestionUsed = function(answer) {
  questionsUsed.push(answer);
}

const pickCountry = function(continentCode) {
  const numCountries = data[continentCode].length - 1;
  const index = Math.floor(Math.random() * numCountries);
  const country = data[continentCode][index];
  if (questionsUsed.indexOf(country.countryNames.english) !== -1) {
    return pickCountry(continentCode);
  }
  return {
      question: country.countryNames.french,
      answer: country.countryNames.english,
      max: numCountries
    };;
}

const getNationalitiesQuestion = function(continentCodeUpperCased, callback) {
  const numCountries = nationalityData[continentCodeUpperCased].length - 1;
  const index = Math.floor(Math.random() * numCountries);
  const country = nationalityData[continentCodeUpperCased][index];
  if (questionsUsed.indexOf(country.nationalities.english) !== -1) {
    return getNationalitiesQuestion(continentCodeUpperCased);
  } else {
    return {
        question: country.nationalities.french[0],
        answer: country.nationalities.english,
        max: numCountries
    };
  }
}

const pickQuestion = function(continentCode, category) {
  if (continentCode === 'randomize') {
    continentCode = pickRandomContinent();
  }
  if (category === 'countries') {
    return pickCountry(continentCode.toUpperCase());
  } else if (category === 'nationalities') {
    return (function() 
    {const numCountries = nationalityData[continentCode.toUpperCase()].length - 1;
      const index = Math.floor(Math.random() * numCountries);
      const country = nationalityData[continentCode.toUpperCase()][index];
      if (questionsUsed.indexOf(country.nationalities.english) !== -1) {
        return getNationalitiesQuestion(continentCode.toUpperCase());
      } else {
        return {
            question: country.nationalities.french[0],
            answer: country.nationalities.english,
            max: numCountries
        };
      }
    }())
  }
}
const findQuestionComponent = function(q, questionId) {
  let currentQuestion = () => {};
  if (questionId % 2 === 0) {
    currentQuestion = function (question) {
      return (
        <Question1
          question={q}
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
          question={q}
          onResponseChange={this.manageAnswerBox.bind(this)}
          enabledState={this.state.answerBoxState}
          response={this.state.response}
        />
      );
    };
  }
  return currentQuestion;
}

module.exports = {
  findQuestionComponent,
  pickQuestion,
  markQuestionUsed
}
