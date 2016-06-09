var React = require('react');
//uri vars
var countries = '#';
//require imgs
var earthImg = require("../assets/earth.svg");
var peopleImg = require("../assets/nationalities.svg");
var gazeboImg = require("../assets/mixitup.svg");

var PanelLeft = React.createClass({
  render: function() {
    return (
        <div className='f-panel f-panel-left row'>
          <div className='col-md-12'>
            <h3 className='f-title'>Learn countries and nationalities in French</h3>
            <div className='row'>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={earthImg} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={peopleImg} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={gazeboImg} className='f-main-pg-img'/>
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

module.exports = PanelLeft