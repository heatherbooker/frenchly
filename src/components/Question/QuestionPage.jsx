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
      checkBtnClass: 'f-btn-disabled',
      linkClass: 'f-link-disabled',
      checkBtnText: 'Check',
      response: ''
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
        return <Question1 question={question} onResponseChange={this.handleAnswerBox.bind(this)} />;
      };
    } else {
      currentQuestion = function (question) {
        return <Question2 question={question} onResponseChange={this.handleAnswerBox.bind(this)} />;
      };
    }
    return currentQuestion;
  }
  enableButton(enable) {
    let newState = '';
    if (enable) {
      newState = { checkBtnClass: 'f-btn-proceed' };
    } else {
      newState = { checkBtnClass: 'f-btn-disabled' };
    }
    this.setState(
      function() {
        return newState;
      }
    );
  }
  handleAnswerBox(response) {
    if (response !== '') {
      this.enableButton(true);
    } else {
      this.enableButton(false);
    }
    this.setState(
      function() {
        return { response: response };
      }
    );
  }
  handleCheckBtnClick() {
    //if this.state.checkBtnText is already 'Continue', no need to do anything
    if (this.state.checkBtnText === 'Check') {
      if (this.state.response === this.answer) {
        alert('RAD BEANS! YOU RULE!');
      }
      this.setState(
        function() {
          return {
            linkClass: '',
            checkBtnText: 'Continue'
          };
        }
      );
    }
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
            <div className="row">
              <div className="col-md-12 f-bottom-bar">
                <BottomBar 
                  btnTxt={this.state.checkBtnText}
                  btnClass={this.state.checkBtnClass}
                  linkClass={this.state.linkClass}
                  onBtnClick={this.handleCheckBtnClick.bind(this)}
                />
              </div>
            </div>
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
