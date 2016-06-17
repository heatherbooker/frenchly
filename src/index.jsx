var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
//require other components
var Nav = require("./components/Nav.jsx");
var MapPage = require('./components/Map/MapPage.jsx');
var LandingPage = require('./components/Home/LandingPage.jsx');
var QuestionPage = require('./components/Question/QuestionPage.jsx');
var Question1 = require('./components/Question/Question1.jsx');
var Question2 = require('./components/Question/Question2.jsx');
//require stylesheet
require("./stylesheets/main.scss");


var Main = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <Nav />
        {this.props.children}
      </div>
      );
  }
});


//render react component
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={LandingPage}/>
      <Route path="map" component={MapPage}/>
      <Route component={QuestionPage}>
        <Route path="question1" component={Question1}/>
        <Route path="question2" component={Question2}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
