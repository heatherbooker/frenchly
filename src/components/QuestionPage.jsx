var React = require('react');
var ProgressBar = require('./ProgressBar.jsx');
var Question1 = require('./Question1.jsx');
var Question2 = require('./Question2.jsx');


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
            <Question2 />
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