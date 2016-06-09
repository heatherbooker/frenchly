var React = require('react');
var PanelRight = require("./components/PanelRight.jsx");
var PanelLeft = require('./components/PanelLeft.jsx');


var LandingPage = React.createClass({
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

module.exports = LandingPage
