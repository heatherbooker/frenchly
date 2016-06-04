var React = require('react');
var ReactDOM = require('react-dom');

//require stylesheet
require("./stylesheets/main.scss");
//require imgs
var badge = require("./assets/badge.png");

//uri vars
var home = 'index.html';

var Main = React.createClass({
  render: function() {
    return (
      <div className="grid">
        <Nav />
        <Spacer />
        <Content />
        <Spacer />
      </div>
      );
  }
});

var Panel = React.createClass({
  render: function() {
    return (
      <div className='panel panel-big'>
      </div>
    );
  }
});

var PanelLeft = React.createClass({
  render: function() {
    return (
      <div className='col-3-4'>
        <div className='panel panel-left'>
        </div>
      </div>
    );
  }
});

var PanelRight = React.createClass({
  render: function() {
    return (
      <div className='col-1-4'>
        <div className='panel panel-right'>
        </div>
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className='col-4-6'>
        <PanelLeft />
        <PanelRight />
      </div>
    );
  }
});

var Spacer = React.createClass({
  render: function() {
    return (
      <div className="col-1-6">
      </div>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div className='nav'>
        <Spacer />
        <h1 className='nav-logo'><a href={home}>Frenchly</a></h1>
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
  <Main />,
  document.getElementById('app')
);