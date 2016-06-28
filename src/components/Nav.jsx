const React = require('react');
const Link = require('react-router').Link;


class Nav extends React.Component {
  render() {
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
}

module.exports = Nav;
