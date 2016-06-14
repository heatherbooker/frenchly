var React = require('react');
var QuestionBox = require('./QuestionBox.jsx');
var AnswerBox = require('./AnswerBox.jsx');


var Question1 = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="f-instruct-text">Translate this text</h2>
          </div>
        </div>
        <div className='row'>
          <QuestionBox question={this.props.question} />
          <AnswerBox />
        </div>
      </div>
    );
  }
});

module.exports = Question1
