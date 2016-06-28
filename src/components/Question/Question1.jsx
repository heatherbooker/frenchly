const React = require('react');
const QuestionBox = require('./QuestionBox.jsx');
const AnswerBox = require('./AnswerBox.jsx');


class Question1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="f-instruct-text">Translate this text</h2>
          </div>
        </div>
        <div className="row">
          <QuestionBox question={this.props.question} />
          <AnswerBox 
            onResponseChange={this.props.onResponseChange}
            enabledState={this.props.answerBoxState}
          />
        </div>
      </div>
    );
  }
}
Question1.propTypes = {
 onResponseChange: React.PropTypes.func,
 question: React.PropTypes.string,
 answerBoxState: React.PropTypes.string
};

module.exports = Question1;
