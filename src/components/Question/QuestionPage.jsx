var React = require('react');
var Link = require('react-router').Link;
//import other components
var ProgressBar = require('./ProgressBar.jsx');
var Question1 = require('./Question1.jsx');
var Question2 = require('./Question2.jsx');


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = this.findCategory(props.params.category);
    this.area = this.findAreaName(props.params.area);
    if (Number(props.params.questionId) % 2 === 0) {
      this.currentQuestion = <Question1 />;
    } else {
      this.currentQuestion = <Question2 />;
    }
  }
  findCategory(categoryParam) {
    let category = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
    if (category === 'Mixitup') {
      category = 'Mix it up';
    }
    return category;
  }
  findAreaName(continentCode) {
    let area = '';
    if (continentCode === 'randomize') {
      area = 'Random';
    } else {
      area = {
        na: 'North America',
        sa: 'South America',
        af: 'Africa',
        eu: 'Europe',
        as: 'Asia',
        oc: 'Oceania'
      }[continentCode]
    }
    return area;
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>{this.category} - {this.area}</h3>
                <Link to="/">
                  <h3 className='f-quit'>Quit</h3>
                </Link>
              </div>
            </div>
            <div className='row'>
              <ProgressBar />
            </div>
            {this.currentQuestion}
            <div className='row'>
              <div className='col-md-12 f-bottom-bar'>
                <div className='f-btn-disabled f-checkQ'>
                  <Link to="/">
                    <span>Check</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = QuestionPage;
