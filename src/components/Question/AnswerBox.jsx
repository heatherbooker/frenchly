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
  render() {
    return (
      <div className="col-md-5">
        <input 
          className="f-boxA" 
          type="text" 
          value={this.state.responseGiven} 
          onChange={this.changeHandler.bind(this)} 
          placeholder="Type in French" 
        />
      </div>
    );
  }
}
AnswerBox.propTypes = {
 onResponseChange: React.PropTypes.func
};

module.exports = AnswerBox;
