const React = require('react');
const PanelRight = require("./PanelRight.jsx");
const PanelLeft = require('./PanelLeft.jsx');


class LandingPage extends React.Component {
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

module.exports = LandingPage;
