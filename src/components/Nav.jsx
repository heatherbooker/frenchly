var React = require('react');
var Link = require('react-router').Link;
//uri vars
var home = 'index.html';


var Nav = React.createClass({
  render: function() {
    return (
      <div className='row f-nav'>
        <div className='col-md-2 col-md-offset-2'>
          <Link to="/">
            <h1 className='f-nav-logo'>Frenchly</h1>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Nav