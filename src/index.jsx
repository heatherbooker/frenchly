var React = require('react');
var ReactDOM = require('react-dom');

//require stylesheet
require("./stylesheets/main.scss");
//require imgs
var badge = require("./assets/badge.png");

//uri vars
var home = 'index.html'; //how to use this instead of hardcoding the link?

var MainDiv = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Badge />
      </div>
      );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div className='nav'>
        <h3 className='nav-logo'><a href='index.html'>Frenchly</a></h3>
      </div>
    );
  }
});

var Badge = React.createClass({
	render: function() {
		return (
      <div>This is the badge component
        <div className='badge-div'>This has a className</div>
        <img src={badge} />
      </div>
      );
	}
});

//render react component
ReactDOM.render(
  <MainDiv />,
  document.getElementById('app')
);