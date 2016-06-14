var React = require('react');
var Link = require('react-router').Link;
//require badge img
var Badge = require('../Badge.jsx');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='f-panel f-panel-right row'>
        <div className='col-md-12'>
          <h4 className='f-progress'>Progress</h4>
          <Badge />
          <div className='f-btn-primary f-reset'>
            <Link to="/home">
              <h4>Reset</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PanelRight