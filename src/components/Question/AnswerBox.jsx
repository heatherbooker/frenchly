var React = require('react');


var AnswerBox = React.createClass({
  render: function() {
    return (
        <div className="col-md-5">
          <input className="f-boxA" type="text" placeholder="Type in French" />
        </div>
      );
  }
});

module.exports = AnswerBox
