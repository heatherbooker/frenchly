var React = require('react');


var Question2 = React.createClass({
  render: function() {
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
              <h3 className="f-fillQ">You will fill in the</h3>
              <div className="f-fillA"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Question2
