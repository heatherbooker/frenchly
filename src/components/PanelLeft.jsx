var React = require('react');


var PanelLeft = React.createClass({
  render: function() {
    return (
        <div className='f-panel f-panel-left row'>
          <div className='col-md-12'>
            <h3 className='f-title'>Learn countries and nationalities in French</h3>
            <div className='row'>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={earth} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={people} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
              <div className='col-md-4'>
                <a href={countries}>
                  <img src={gazebo} className='f-main-pg-img'/>
                  <div className='f-btn-primary'>
                    <h4>Word</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = PanelLeft