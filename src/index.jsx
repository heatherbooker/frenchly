var React = require('react');
var ReactDOM = require('react-dom');

//require stylesheet
require("./stylesheets/main.scss");
//require imgs
var badge = require("./assets/badge.svg");

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
          <div className='pad-10'>
          </div>
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
          <div className='pad-10'>
            <h4 className='progress'>Progress</h4>
            <Badge />
          </div>
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
      <div className='badge pad-20'>
        <img src={badge} className='badge-icon'/>
        <h2 className='prog-percent'>11%</h2>
      </div>
      );
	}
});

//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);