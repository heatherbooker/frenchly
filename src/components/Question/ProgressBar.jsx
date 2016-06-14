var React = require('react');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-offset-3 col-md-6">
        <div className="f-progress-bar-outer">
          <div className="f-progress-bar-top">
          </div>
          <div className="f-progress-bar-btm">
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProgressBar
