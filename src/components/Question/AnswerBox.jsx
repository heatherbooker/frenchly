var React = require('react');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-5">
        <input className="f-boxA" type="text" placeholder="Type in French" />
      </div>
    );
  }
}

module.exports = AnswerBox
