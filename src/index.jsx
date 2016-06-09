var React = require('react');
var ReactDOM = require('react-dom');
//require other components
var Nav = require("./components/Nav.jsx");
var PanelRight = require("./components/PanelRight.jsx");
var PanelLeft = require('./components/PanelLeft.jsx');
var MapPage = require('./components/MapPage.jsx');
//require stylesheet
require("./stylesheets/main.scss");


var Main = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <Nav />
        <MapPage />
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


//render react component
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
