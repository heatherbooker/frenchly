const React = require('react');
const Link = require('react-router').Link;
//require imgs
const earthImg = require("../../assets/earth.svg");
const peopleImg = require("../../assets/nationalities.svg");
const gazeboImg = require("../../assets/mixitup.svg");


class PanelLeft extends React.Component {
  render() {
    return (
      <div className='f-panel f-panel-left row'>
        <div className='col-md-12'>
          <h3 className='f-title'>Learn countries and nationalities in French</h3>
          <div className='row'>
            <div className='col-md-4'>
              <Link to="/map/countries">
                <img src={earthImg} className='f-main-pg-img' />
                <div className='f-btn-primary'>
                  <h4>Countries</h4>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <Link to="/map/nationalities">
                <img src={peopleImg} className='f-main-pg-img' />
                <div className='f-btn-primary'>
                  <h4>Nationalities</h4>
                </div>
              </Link>
            </div>
            <div className='col-md-4'>
              <Link to="/map/mixitup">
                <img src={gazeboImg} className='f-main-pg-img' />
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

module.exports = PanelLeft;
