const React = require('react');


class Question2 extends React.Component {
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
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="f-instruct-text">Fill in the blank</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-10">
            <div className="f-Q2">
              <h3 className="f-fillQ">{this.props.question}</h3>
              <input
                className={`${this.props.enabledState} f-fillA`} 
                type="text"
                value={this.props.response}
                onChange={this.changeHandler.bind(this)}
                onKeyPress={this.listenForEnter.bind(this)}
                placeholder="Type missing word"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Question2.propTypes = {
  question: React.PropTypes.string,
  onResponseChange: React.PropTypes.func,
  enabledState: React.PropTypes.string,
  response: React.PropTypes.string
};

module.exports = Question2;
