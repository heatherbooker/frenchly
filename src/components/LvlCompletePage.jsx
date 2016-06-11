var React = require('react');
var ProgressBar = require('./ProgressBar.jsx');
var Badge = require('./Badge.jsx');


var LvlCompletePage = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="f-panel f-panel-big">
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Countries - Africa</h3>
              </div>
            </div>
             <div className='row'>
               <ProgressBar />
             </div>
             <div className="row">
               <div className="col-md-12">
                <h2 className="f-instruct-text">Lesson Complete!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <span className="f-fluency-text">You are now 11% fluent in countries in French!</span>
              </div>
              <div className="col-md-4">
                <Badge />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LvlCompletePage
