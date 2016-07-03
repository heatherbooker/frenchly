const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const IndexRoute = require('react-router').IndexRoute;
//require other components
const Main = require("./components/Main.jsx");
const MapPage = require('./components/Map/MapPage.jsx');
const LandingPage = require('./components/Home/LandingPage.jsx');
const QuestionPage = require('./components/Question/QuestionPage.jsx');
const Question1 = require('./components/Question/Question1.jsx');
const Question2 = require('./components/Question/Question2.jsx');
const LvlCompletePage = require('./components/Question/LvlCompletePage.jsx');
//require stylesheet
require("./stylesheets/main.scss");


//render react component
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={LandingPage} />
      <Route path="map/:category" component={MapPage} />
      <Route path="question/:category/:continentCode" component={QuestionPage} />
      <Route path="question/:category/:continentCode/lvlcomplete" component={LvlCompletePage} />
    </Route>
  </Router>
), document.getElementById('app'));
