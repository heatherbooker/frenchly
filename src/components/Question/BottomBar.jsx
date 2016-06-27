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
      color: 'someClassName'
    }
    this.wrong = {
      icon: wrongImg,
      message: 'Correct Solution',
      color: 'someClassName'
    }
  }
  render() {
    return (
      <div className="row f-bottom-bar">
        <div className="col-md-2">
          <img src={this.correct.icon} className="f-responseImg" />
        </div>
        <div className="col-md-6">
          {this.props.answer}
        </div>
        <div className="col-md-4">
          <div className={`${this.props.btnClass} f-checkQ`} onClick={this.props.onBtnClick}>
            <Link to="/" className={this.props.linkClass}>
              <span>{this.props.btnTxt}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
BottomBar.propTypes = {
  btnTxt: React.PropTypes.string,
  btnClass: React.PropTypes.string,
  linkClass: React.PropTypes.string,
  answer: React.PropTypes.string,
  responseCorrect: React.PropTypes.bool
}

module.exports = BottomBar;
