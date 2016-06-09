var React = require('react');
var world = require('../assets/world.svg');
//require other components
var MapImg = require('./Map.jsx');
//require imgs
var randomize = require('../assets/random.svg');


//build components
var MapPage = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Pick an area</h3>
                <h3 className='f-quit'>Quit</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <MapImg />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <img className='f-map-random' src={randomize} />
                <div className='f-btn-disabled f-map-next'>
                  <span>Continue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MapPage
