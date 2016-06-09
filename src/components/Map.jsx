var React = require('react');
var world = require('../assets/world.svg');

var MapImg = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <img className='f-map-img' src={world} />
        </div>
      </div>
    );
  }
});

module.exports = MapImg
