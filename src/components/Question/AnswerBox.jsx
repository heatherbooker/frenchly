var React = require('react');


class AnswerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseGiven: ''
    };
  }
  changeHandler(response) {
    this.setState({ responseGiven: response });
  }
  render() {
    return (
      <div className="col-md-5">
        <input className="f-boxA" type="text" value={this.state.response} onChange={this.changeHandler.bind(this, 'response')} placeholder="Type in French" />
        <h2> {this.state.responseGiven}</h2>
      </div>
    );
  }
}

module.exports = AnswerBox;
