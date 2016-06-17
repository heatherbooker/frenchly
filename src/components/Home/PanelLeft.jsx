var React = require('react');
var Link = require('react-router').Link;
//uri vars
var countries = '#';
//require imgs
var earthImg = require("../../assets/earth.svg");
var peopleImg = require("../../assets/nationalities.svg");
var gazeboImg = require("../../assets/mixitup.svg");


class PanelLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='f-panel f-panel-left row'>
        <div className='col-md-12'>
          <h3 className='f-title'>Learn countries and nationalities in French</h3>
          <div className='row'>
            <div className='col-md-4'>
              <Link to="/map/countries/false">
                <img src={earthImg} className='f-main-pg-img'/>
                <div className='f-btn-primary'>
                  <h4>Countries</h4>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <Link to="/map/nationalities/false">
                <img src={peopleImg} className='f-main-pg-img'/>
                <div className='f-btn-primary'>
                  <h4>Nationalities</h4>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <Link to="/map/mixitup/false">
                <img src={gazeboImg} className='f-main-pg-img'/>
                <div className='f-btn-primary'>
                  <h4>Mix It Up</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PanelLeft