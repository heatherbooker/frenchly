var React = require('react');
var PanelRight = require("./PanelRight.jsx");
var PanelLeft = require('./PanelLeft.jsx');


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
}

module.exports = LandingPage
