const React = require('react');
const Link = require('react-router').Link;
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
      currentQuestion: logic.findQuestionComponent(1).bind(this)
    };
    this.answer = 'the answer';
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
    if (btnText === 'Check') {
      const newState = {};
      if (this.state.response === this.answer) {
        newState.lessonScore = this.state.lessonScore + 10;
      } else {
        newState.lessonScore = this.state.lessonScore;
      }
      this.setState(
        function () {
          return {
            answerBoxState: 'f-boxA-disabled',
            lessonScore: newState.lessonScore
          };
        }
      );
    } else {
      console.log('i am the man');
      this.setState(function () {
        return {
          currentQuestion: logic.findQuestionComponent(0).bind(this),
          answerBoxState: 'f-boxA'
        }
      })
      this.forceUpdate();
    }
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
