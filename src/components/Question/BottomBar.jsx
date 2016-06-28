const React = require('react');
const Link = require('react-router').Link;
//get right and wrong icons to display
const correctImg = require('../../assets/check.svg');
const wrongImg = require('../../assets/cross.svg');


class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.correct = {
      icon: correctImg,
      message: '',
      colour: 'f-bottom-bar-correct'
    };
    this.wrong = {
      icon: wrongImg,
      message: 'Correct Solution',
      colour: 'f-bottom-bar-wrong'
    };
    this.answer = this.props.answer;
    this.state = {
      linkClass: 'f-link-disabled',
      checkBtnText: 'Check',
      reactionText: '',
      iconClass: 'f-reactIcon-disabled',
      bkgrdColour: 'f-bottom-bar',
      answerClass: 'f-answerText-hidden',
      reactionClass: ''
    };
  }
  onBtnClick() {
    //if this.state.checkBtnText is already 'Continue':
     //Link is being clicked, not btn;
     //therefore, do nothing
    if (this.state.checkBtnText === 'Check') {
      const newState = {};
      if (this.props.response === this.answer) {
        this.reactToResponse(true);
      } else {
        this.reactToResponse(false);
      }
      //remove link disabling class
      newState.linkClass = '';
      //change btn text to continue
      newState.checkBtnText = 'Continue';
      //tell question page to disable question box
      this.props.onSubmit();
      //set new state
      this.setState(() => newState);
    }
  }
  reactToResponse(isCorrect) {
    let newState = {};
    if (isCorrect) {
      newState.reactionText = 'You are correct';
      newState.icon = this.correct.icon;
      newState.bkgrdColour = this.correct.colour;
      newState.reactionClass = 'f-reactionText-correct';
    } else {
      newState = {
        reactionText: 'Correct Solution: ',
        answerClass: 'f-answerText',
        icon: this.wrong.icon,
        bkgrdColour: this.wrong.colour,
        reactionClass: 'f-reactionText-wrong'
      };
    }
    newState.iconClass = 'f-reactIcon';
    this.setState(() => newState);
  }
  render() {
    return (
      <div className={`row ${this.state.bkgrdColour}`}>
        <div className="col-md-2">
          <img src={this.state.icon} className={this.state.iconClass} />
        </div>
        <div className="col-md-6">
          <h3 className={`f-reactionText ${this.state.reactionClass}`}>
            {this.state.reactionText}
          </h3>
          <p className={this.state.answerClass}>
            {this.answer}
          </p>
        </div>
        <div className="col-md-4">
          <div
            className={`${this.props.checkBtnClass} f-checkQ`}
            onClick={this.onBtnClick.bind(this)}>
            <Link to="/" className={this.state.linkClass}>
              <span>{this.state.checkBtnText}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
BottomBar.propTypes = {
  answer: React.PropTypes.string,
  response: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  checkBtnClass: React.PropTypes.string
};

module.exports = BottomBar;
