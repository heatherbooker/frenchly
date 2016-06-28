const React = require('react');
const Link = require('react-router').Link;
//import other components
const ProgressBar = require('./ProgressBar.jsx');
const Question1 = require('./Question1.jsx');
const Question2 = require('./Question2.jsx');
const BottomBar = require('./BottomBar.jsx');


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = this.findCategory(props.params.category);
    this.area = this.findAreaName(props.params.area);
    this.currentQuestion = this.findQuestionComponent(props.params.questionId);
    this.state = {
      response: '',
      answerBoxState: 'f-boxA',
      checkBtnClass: 'f-btn-disabled'
    };
    this.answer = 'the answer';
  }
  findCategory(categoryParam) {
    let category = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
    if (category === 'Mixitup') {
      category = 'Mix it up';
    }
    return category;
  }
  findAreaName(continentCode) {
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
  findQuestionComponent(questionId) {
    let currentQuestion = () => {};
    if (questionId % 2 === 0) {
      currentQuestion = function (question) {
        return (
          <Question1
            question={question}
            onResponseChange={this.handleAnswerBox.bind(this)}
            answerBoxState={this.state.answerBoxState}
          />
        );
      };
    } else {
      currentQuestion = function (question) {
        return (
          <Question2
            question={question}
            onResponseChange={this.handleAnswerBox.bind(this)}
            enabledState={this.state.answerBoxState}
          />
        );
      };
    }
    return currentQuestion;
  }
  handleAnswerBox(response) {
    if (response !== '') {
      this.enableButton(true);
    } else {
      this.enableButton(false);
    }
    this.setState(
      function () {
        return { response: response };
      }
    );
  }
  onCheckBtnClick() {
    //called by BottomBar component
    //disable QuestionBox (through Question1)
    this.setState(
      function () {
        return { answerBoxState: 'f-boxA-disabled' };
      }
    );
  }
  enableButton(enable) {
    let newState = '';
    if (enable) {
      newState = { checkBtnClass: 'f-btn-proceed' };
    } else {
      newState = { checkBtnClass: 'f-btn-disabled' };
    }
    this.setState(() => newState);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="f-panel f-panel-big">
            <div className="row">
              <div className="col-md-12">
                <h4 className="f-questionPage-title">{this.category} - {this.area}</h4>
                <Link to="/">
                  <h3 className="f-quit">Quit</h3>
                </Link>
              </div>
            </div>
            <div className="row">
              <ProgressBar />
            </div>
            {this.currentQuestion('the question')}
            <BottomBar
              btnTxt={this.state.checkBtnText}
              checkBtnClass={this.state.checkBtnClass}
              linkClass={this.state.linkClass}
              response={this.state.response}
              answer={this.answer}
              onSubmit={this.onCheckBtnClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
QuestionPage.propTypes = {
  params: React.PropTypes.object
};

module.exports = QuestionPage;
