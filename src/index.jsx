var React = require('react');
var ReactDOM = require('react-dom');

//require stylesheet
require("./stylesheets/main.scss");
//require imgs
var badge = require("./assets/badge.svg");
var earth = require("./assets/earth.svg");
var people = require("./assets/nationalities.svg");
var gazebo = require("./assets/mixitup.svg");

//uri vars
var home = 'index.html';
var countries = '#';

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
          <div className='pad-20'>
            <h3 className='title pad-20'>Learn countries and nationalities in French</h3>
            <div className='col-1-3'>
              <a href={countries}>
                <img src={earth} className='main-pg-img'/>
                <Button />
              </a>
            </div>
            <div className='col-1-3'>
              <a href={countries}>
                <img src={people} className='main-pg-img'/>
                <Button />
              </a>
            </div>
            <div className='col-1-3'>
              <a href={countries}>
                <img src={gazebo} className='main-pg-img'/>
                <Button />
              </a>
            </div>
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
            <Button className='reset'/>
          </div>
        </div>
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div className='btn-blue'>
        <h4>Word</h4>
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