var React = require('react');
var Link = require('react-router').Link;
//require other components
var MapImg = require('./Map.jsx');
//require imgs
var randomizeImg = require('../../assets/random.svg');
var randomizeImgSelected = require('../../assets/random-selected.svg');


class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = props.params.category;
    this.questionId = Math.random().toString().slice(7);
    this.randomizeImg = randomizeImg;
    this.continueBtnClass = "f-btn-disabled";
    this.state = { randomizeSelected: false, mapSelected: false };
  }
  componentDidMount() {
    //create event to dispatch when randomize button is clicked, to alert map
    this.randomizeClickEvent = new Event('onRandomizeClick');
    //listening to all map components
    window.addEventListener('onMapSelect', () => {
      this.toggleSelectedState('mapOn');
    });
    window.addEventListener('onMapUnselect', () => {
      this.toggleSelectedState('mapOff');
    });
  }
  onRandomizeClick() {
    window.dispatchEvent(this.randomizeClickEvent);
    this.toggleSelectedState();
  }
  toggleSelectedState(mapState) {
    this.setState(
      function() {
        const newState = { randomizeSelected: false, mapSelected: false };
        if (mapState === 'mapOn') {
          newState.mapSelected = true;
          this.enableButton(true);
          if (this.state.randomizeSelected) {
            newState.randomizeSelected = false;
          }
        } else if (mapState === 'mapOff') {
          this.enableButton(false);
        } else if (!this.state.randomizeSelected) {
          newState.randomizeSelected = true;
          this.enableButton(true);
        } else {
          newState.randomizeSelected = false;
          this.enableButton(false);
        }
        return newState;
      }, this.toggleColour.bind(this)
    );
  }
  toggleColour() {
    //toggle which randomize image will be shown (different colours)
    if (this.state.randomizeSelected) {
      this.randomizeImg = randomizeImgSelected;
    } else {
      this.randomizeImg = randomizeImg;
    }
    this.forceUpdate();
  }
  enableButton(enable) {
    if (enable) {
      this.continueBtnClass = 'f-btn-proceed';
    } else {
      this.continueBtnClass = 'f-btn-disabled';
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='f-panel f-panel-big'>
            <div className='row'>
              <div className='col-md-12'>
                <h3 className='f-map-title'>Pick an area</h3>
                <Link to="/">
                  <h3 className='f-quit'>Quit</h3>
                </Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <MapImg />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <img className="f-map-random" src={this.randomizeImg} onClick={this.onRandomizeClick.bind(this)} />
                <div className={`${this.continueBtnClass} f-map-next`}>
                  <Link to={`question/${this.category}/anArea/${this.questionId}`}>
                    <span>Continue</span>
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

module.exports = MapPage;
