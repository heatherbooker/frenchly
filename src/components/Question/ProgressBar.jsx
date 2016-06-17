var React = require('react');


var ProgressBar = React.createClass({
  render: function() {
    return (
      <div className="col-md-offset-3 col-md-6">
        <div className="f-progress-bar-outer">
          <div className="f-progress-bar-top">
          </div>
          <div className="f-progress-bar-btm">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressBar
