const React = require('react');
const Link = require('react-router').Link


class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    //whatever else
  }
  render() {
    console.log(this.props);
    return (
      <div className={`${this.props.btnClass} f-checkQ`} onClick={this.props.onBtnClick}>
        <Link to="/" className={this.props.linkClass}>
          <span>{this.props.btnTxt}</span>
        </Link>
      </div>
    );
  }
}
BottomBar.propTypes = {
  btnTxt: React.PropTypes.string,
  btnClass: React.PropTypes.string,
  linkClass: React.PropTypes.string
}

module.exports = BottomBar;
