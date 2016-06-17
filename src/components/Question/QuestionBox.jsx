var React = require('react');


var QuestionBox = React.createClass({
  render: function() {
    return (
        <div className="col-md-offset-1 col-md-5">
          <div className="f-boxQ">
            {this.props.question}
          </div>
        </div>
      );
  }
});


module.exports = QuestionBox
