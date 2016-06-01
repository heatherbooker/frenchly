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
        <h3>It will have a picture of the badge</h3>
        <h4>with some 37949874(ie numbas) on it %%%%</h4>
      </div>
      );
	}
});

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);