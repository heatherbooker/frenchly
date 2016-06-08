var React = require('react');
var badgeImg = require("../assets/badge.svg");

var Badge = React.createClass({
  render: function() {
    return (
      <div className='f-progress-badge'>
        <img src={badgeImg} className='f-badge-icon'/>
        <h2 className='f-prog-percent'>11%</h2>
      </div>
      );
  }
});

module.exports = Badge