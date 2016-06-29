const React = require('react');
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;
//import other components
const ProgressBar = require('./ProgressBar.jsx');
const Question1 = require('./Question1.jsx');
const Question2 = require('./Question2.jsx');
const BottomBar = require('./BottomBar.jsx');
//import logic
const logic = require('../../logic/questionPage.jsx');


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = logic.findCategory(props.params.category);
    this.area = logic.findAreaName(props.params.area);
    this.state = {
      response: '',
      answerBoxState: 'f-boxA',
      checkBtnClass: 'f-btn-disabled',
      lessonScore: 0,
      currentQuestion: logic.findQuestionComponent().bind(this),
      questionId: 0,
      lvlComplete: false
    };
    this.answer = 'a';
  }
  manageAnswerBox(response) {
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
  onCheckBtnClick(btnText) {
  //called by BottomBar component
    const newState = {};
    if (btnText === 'Check') {
      if (this.state.response === this.answer) {
        newState.lessonScore = this.state.lessonScore + 40;
        if (newState.lessonScore >= 100) {
          newState.lvlComplete = true;
        }
      } else {
        newState.lessonScore = this.state.lessonScore;
        newState.lvlComplete = false;
      }
      this.setState(
        function () {
          return {
            answerBoxState: 'f-boxA-disabled',
            lessonScore: newState.lessonScore,
            lvlComplete: newState.lvlComplete
          };
        }
      );
    } else {
        this.setState(function () {
          return {
            currentQuestion: logic.findQuestionComponent(this.state.questionId).bind(this),
            questionId: this.state.questionId +1,
            answerBoxState: 'f-boxA',
            response: '',
            checkBtnClass: 'f-btn-disabled'
          }
        });
    }
    this.forceUpdate();
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
            {this.state.currentQuestion('the question')}
            <BottomBar
              btnTxt={this.state.checkBtnText}
              checkBtnClass={this.state.checkBtnClass}
              response={this.state.response}
              answer={this.answer}
              onSubmit={this.onCheckBtnClick.bind(this)}
              category={this.category}
              area={this.area}
              lvlIsComplete={this.state.lvlComplete}
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
