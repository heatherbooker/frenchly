const React = require('react');
const Link = require('react-router').Link;
//import other components
const ProgressBar = require('./ProgressBar.jsx');
const BottomBar = require('./BottomBar.jsx');
//import logic
const logic = require('../../logic/questionPage.jsx');

const categoryMap = {
  countries: "Countries",
  nationalities: "Nationalities"
};
const continentCodeMap = {
  na: 'North America',
  sa: 'South America',
  af: 'Africa',
  eu: 'Europe',
  as: 'Asia',
  oc: 'Oceania',
  randomize: 'Random'
};


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = categoryMap[props.params.category];
    this.continentCode = continentCodeMap[props.params.continentCode];
    this.qAndA = logic.pickQuestion(props.params.continentCode, props.params.category);
    this.state = {
      response: '',
      answerBoxState: 'f-boxA',
      checkBtnClass: 'f-btn-disabled',
      lessonMax: this.qAndA.max,
      currentQuestion: logic.findQuestionComponent(this.qAndA.question, 0).bind(this),
      answer: this.qAndA.answer,
      continent: this.continentCode,
      lessonScore: 0,
      lvlComplete: false
    };
  }
  manageAnswerBox(response) {
    if (response !== '') {
      this.enableButton(true);
    } else {
      this.enableButton(false);
    }
    this.setState(() => ({ response }));
  }
  onCheckBtnClick(btnText) {
  //called by BottomBar component
    const newState = {};
    if (btnText === 'Check') {
      if (this.state.response.toLowerCase() === this.state.answer.toLowerCase()) {
        newState.lessonScore = this.state.lessonScore + (100 / this.state.lessonMax);
        if (newState.lessonScore >= 100) {
          newState.lvlComplete = true;
        }
        logic.markQuestionUsed(this.state.answer, this.state.continent, this.props.params.category);
      } else {
        newState.lessonScore = this.state.lessonScore;
        newState.lvlComplete = false;
      }
      this.setState(() =>
        ({
          answerBoxState: 'f-boxA-disabled',
          lessonScore: newState.lessonScore,
          lvlComplete: newState.lvlComplete
        })
      );
    } else {
      this.setState(function () {
        this.qAndA = logic.pickQuestion(this.props.params.continentCode, this.props.params.category);
        return {
          currentQuestion: logic.findQuestionComponent(this.qAndA.question, this.state.lessonScore).bind(this),
          answer: this.qAndA.answer,
          lessonScore: this.state.lessonScore + 1,
          answerBoxState: 'f-boxA',
          response: '',
          checkBtnClass: 'f-btn-disabled'
        };
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
                <h4 className="f-questionPage-title">{this.category} - {this.continentCode}</h4>
                <Link to="/">
                  <h3 className="f-quit">Quit</h3>
                </Link>
              </div>
            </div>
            <div className="row">
              <ProgressBar progress={this.state.lessonScore} />
            </div>
            {this.state.currentQuestion()}
            <BottomBar
              btnTxt={this.state.checkBtnText}
              checkBtnClass={this.state.checkBtnClass}
              response={this.state.response}
              answer={this.state.answer}
              onSubmit={this.onCheckBtnClick.bind(this)}
              category={this.category}
              area={this.props.params.continentCode}
              lvlIsComplete={this.state.lvlComplete}
              continent={this.state.continent}
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
