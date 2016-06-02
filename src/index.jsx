var React = require('react');
var ReactDOM = require('react-dom');

//require stylesheet
require("./styles.scss");
//require imgs
var badge = require("./assets/badge.png");

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
        <div className='aBadgeDiv'>This has a className</div>
        <img src={badge} />
      </div>
      );
	}
});

//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);