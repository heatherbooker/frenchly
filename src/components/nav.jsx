var React = require('react');

//uri vars
var home = 'index.html';

var Nav = React.createClass({
  render: function() {
    return (
      <div className='row f-nav'>
        <div className='col-md-2 col-md-offset-2'>
          <h1 className='f-nav-logo'><a href={home}>Frenchly</a></h1>
        </div>
      </div>
    );
  }
});

module.exports = Nav