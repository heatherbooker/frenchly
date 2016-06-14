var React = require('react');
var Link = require('react-router').Link;
//require other components
var MapImg = require('./Map.jsx');
//require imgs
var randomizeImg = require('../../assets/random.svg');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Pick an area</h3>
                <Link to="/">
                  <h3 className='f-quit'>Quit</h3>
                </Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <MapImg />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <img className='f-map-random' src={randomizeImg} />
                <div className='f-btn-disabled f-map-next'>
                  <Link to="/question">
                    <span>Continue</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MapPage
