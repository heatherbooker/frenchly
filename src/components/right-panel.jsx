var React = require('react');

//require other components
var Button = require("./button.jsx")

//require badge img
var badge = require("../assets/badge.svg");

//build components
var PanelRight = React.createClass({
  render: function() {
    return (
        <div className='f-panel f-panel-right row'>
          <div className='col-md-12'>
            <h4 className='f-progress'>Progress</h4>
            <Badge />
            <Button className='f-reset'/>
          </div>
        </div>
    );
  }
});

var Badge = React.createClass({
  render: function() {
    return (
      <div className='f-progress-badge'>
        <img src={badge} className='f-badge-icon'/>
        <h2 className='f-prog-percent'>11%</h2>
      </div>
      );
  }
});

module.exports = PanelRight