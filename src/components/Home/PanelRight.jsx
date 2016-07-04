const React = require('react');
const Link = require('react-router').Link;
//require badge img
const Badge = require('../Badge.jsx');


class PanelRight extends React.Component {
  constructor(props) {
    super(props);
    const FrenchlyProgress = JSON.parse(localStorage.getItem('FrenchlyProgress'));
    this.state = {
      progressPercent: (FrenchlyProgress.Countries.score + FrenchlyProgress.Nationalities.score) / 2
    };
  }
  handleResetClick() {
    this.setState({ progressPercent: 0 });
    localStorage.setItem(JSON.stringify('FrenchlyProgress', {
      Countries: {
        score: 0,
        na: false,
        sa: false,
        af: false,
        eu: false,
        as: false,
        oc: false
      }, Nationalities: {
        score: 0,
        na: false,
        sa: false,
        af: false,
        eu: false,
        as: false,
        oc: false
      }
    }));
  }
  render() {
    return (
      <div className='f-panel f-panel-right row'>
        <div className='col-md-12'>
          <h4 className='f-progress'>Progress</h4>
          <Badge progressPercent={this.state.progressPercent} />
          <div className='f-btn-primary f-reset' onClick={this.handleResetClick.bind(this)}>
            <h4>Reset</h4>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PanelRight;
