var React = require('react');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="f-instruct-text">Fill in the blank</h2>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-offset-2 col-md-10">
            <div className="f-Q2">
              <h3 className="f-fillQ">{this.props.question}</h3>
              <input className="f-fillA" type="text" placeholder="Type missing word" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Question2
