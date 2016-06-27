var React = require('react');


class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-offset-1 col-md-5">
        <div className="f-boxQ">
          <p>{this.props.question}</p>
        </div>
      </div>
    );
  }
}
QuestionBox.propTypes = {
 question: React.PropTypes.string
};

module.exports = QuestionBox;
