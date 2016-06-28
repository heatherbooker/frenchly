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
          className={this.props.enabledState} 
          type="text" 
          onChange={this.changeHandler.bind(this)} 
          placeholder="Type in French" 
        />
      </div>
    );
  }
}
AnswerBox.propTypes = {
 onResponseChange: React.PropTypes.func,
 enabledState: React.PropTypes.string
};

module.exports = AnswerBox;
