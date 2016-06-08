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


//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);