var React = require('react');
var worldImg = require('../../assets/maps/world-workingCopy.svg');
var Router = require('react-router').Router;
var transitionTo = Router.transitionTo;


class MapImg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='row'>
        <iframe className='f-map-img' src={worldImg} border="0" scrolling="no"/>
      </div>
    );
  }
}

module.exports = MapImg
