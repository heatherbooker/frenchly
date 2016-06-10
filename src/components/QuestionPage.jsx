var React = require('react');
var ProgressBar = require('./ProgressBar.jsx');
var QuestionBox = require('./QuestionBox.jsx');
var AnswerBox = require('./AnswerBox.jsx');


var QuestionPage = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Countries - Africa</h3>
                <h3 className='f-quit'>Quit</h3>
              </div>
            </div>
            <div className='row'>
              <ProgressBar />
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="f-instruct-text">Translate this text</h2>
              </div>
            </div>
            <div className='row'>
                <QuestionBox />
                <AnswerBox />
            </div>
            <div className='row'>
              <div className='col-md-12 f-bottom-bar'>
                <div className='f-btn-disabled f-checkQ'>
                  <span>Check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = QuestionPage