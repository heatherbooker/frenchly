var React = require('react');


class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-offset-1 col-md-5">
        <div className="f-boxQ">
          {this.props.question}
        </div>
      </div>
    );
  }
}

module.exports = QuestionBox
