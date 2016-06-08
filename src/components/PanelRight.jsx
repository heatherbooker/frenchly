var React = require('react');
//require badge img
var Badge = require('./Badge.jsx');


//build components
var PanelRight = React.createClass({
  render: function() {
    return (
        <div className='f-panel f-panel-right row'>
          <div className='col-md-12'>
            <h4 className='f-progress'>Progress</h4>
            <Badge />
            <div className='f-btn-primary f-reset'>
              <h4>Word</h4>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = PanelRight