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
      <div className="container-fluid">
        <Nav />
        <Content />
      </div>
      );
  }
});

var Panel = React.createClass({
  render: function() {
    return (
      <div className='f-panel f-panel-big'>
      </div>
    );
  }
});

var PanelLeft = React.createClass({
  render: function() {
    return (
        <div className='f-panel f-panel-left row'>
          <div className='col-md-12'>
            <h3 className='f-title'>Learn countries and nationalities in French</h3>
            <div className='row'>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={earth} className='f-main-pg-img'/>
                  <Button />
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={people} className='f-main-pg-img'/>
                  <Button />
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={gazebo} className='f-main-pg-img'/>
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
        <div className='f-panel f-panel-right row'>
          <div className='col-md-12'>
            <h4 className='f-progress'>Progress</h4>
            <Badge />
            <Button className='f-reset'/>
          </div>
        </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div className='f-btn-blue'>
        <h4>Word</h4>
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-6'>
          <PanelLeft />
        </div>
        <div className='col-md-2'>
          <PanelRight />
        </div>
      </div>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div className='row f-nav'>
        <div className='col-md-2 col-md-offset-2'>
          <h1 className='f-nav-logo'><a href={home}>Frenchly</a></h1>
        </div>
      </div>
    );
  }
});

var Badge = React.createClass({
	render: function() {
		return (
      <div className='f-progress-badge'>
        <img src={badge} className='f-badge-icon'/>
        <h2 className='f-prog-percent'>11%</h2>
      </div>
      );
	}
});

//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);