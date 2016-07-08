const React = require('react');


class AnswerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseGiven: ''
    };
  }
  changeHandler(e) {
    this.setState({ responseGiven: e.target.value });
    this.props.onResponseChange(e.target.value);
  }
  listenForEnter(e) {
    if (e.which === 13) {
      window.dispatchEvent(new Event('enterKeyPressed'));
    }
  }
  render() {
    return (
      <div className="col-md-5">
        <input
          className={this.props.enabledState}
          type="text"
          value={this.props.response}
          onChange={this.changeHandler.bind(this)}
          onKeyPress={this.listenForEnter.bind(this)}
          placeholder="Type in English"
          autoFocus
        />
      </div>
    );
  }
}
AnswerBox.propTypes = {
  onResponseChange: React.PropTypes.func,
  enabledState: React.PropTypes.string,
  response: React.PropTypes.string
};

module.exports = AnswerBox;
