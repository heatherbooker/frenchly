var React = require('react');

//build components
var Content = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <Panel />
        </div>
      </div>
    );
  }
});

var Panel = React.createClass({
  render: function() {
    return (
      <div className='f-panel f-panel-big'>
      </div>
    );
  }
});

module.exports = Content
