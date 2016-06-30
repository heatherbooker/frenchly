const React = require('react');


class ProgressBar extends React.Component {
  setStyle() {
    let progress = this.props.progress;
    if (this.props.progress > 100) {
      progress = 100;
    }
    return {width: `${progress}%`}
  }
  render() {
    this.style = this.setStyle();
    return (
      <div className="col-md-offset-3 col-md-6">
        <div className="f-progress-bar-outer">
          <span style={this.style} className="f-progress-bar-top">
          </span>
          <span style={this.style} className="f-progress-bar-btm">
          </span>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: React.PropTypes.number,
};

module.exports = ProgressBar;
