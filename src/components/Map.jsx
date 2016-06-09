var React = require('react');
var world = require('../assets/world.svg');

var MapImg = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='f-map-img'>
            <img src={world} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MapImg
