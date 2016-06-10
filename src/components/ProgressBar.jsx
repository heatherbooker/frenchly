var React = require('react');


var ProgressBar = React.createClass({
  render: function() {
    return (
      <div className="col-md-offset-3 col-md-6">
        <span className="f-progress-bar">
        </span>
      </div>
    );
  }
});

module.exports = ProgressBar
