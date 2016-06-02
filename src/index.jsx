var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render:function() {
    return (
      <div>
        <Badge />
      </div>
      );
  }
});

var Badge = React.createClass({
	render: function() {
		return (
      <div>This is the badge component
        <img src="../assets/badge.png" />
      </div>
      );
	}
});

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);