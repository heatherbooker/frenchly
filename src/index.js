'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  displayName: 'Main',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Badge, null)
    );
  }
});

var Badge = React.createClass({
  displayName: 'Badge',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'This is the badge component',
      React.createElement('img', { src: '../assets/badge.png' })
    );
  }
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));