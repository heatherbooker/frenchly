var React = require('react');
var ReactDOM = require('react-dom');
//require other components
var Nav = require("./components/nav.jsx");
var PanelRight = require("./components/right-panel.jsx");
var MapPage = require('./components/map.jsx')
//require stylesheet
require("./stylesheets/main.scss");
//require imgs
var earth = require("./assets/earth.svg");
var people = require("./assets/nationalities.svg");
var gazebo = require("./assets/mixitup.svg");
//uri vars
var countries = '#';


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
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={people} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={gazebo} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
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