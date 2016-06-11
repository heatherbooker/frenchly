var React = require('react');
var ReactDOM = require('react-dom');
//require other components
var Nav = require("./components/Nav.jsx");
var MapPage = require('./components/MapPage.jsx');
var LandingPage = require('./components/LandingPage.jsx');
var QuestionPage = require('./components/QuestionPage.jsx');
//require stylesheet
require("./stylesheets/main.scss");


var Main = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <Nav />
        <QuestionPage />
      </div>
      );
  }
});

//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
