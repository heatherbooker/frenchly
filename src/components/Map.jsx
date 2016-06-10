var React = require('react');
var worldImg = require('../assets/world.svg');


var MapImg = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <img className='f-map-img' src={worldImg} />
        </div>
      </div>
    );
  }
});

module.exports = MapImg
