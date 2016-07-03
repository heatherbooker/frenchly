const React = require('react');
const Link = require('react-router').Link;
//require other components
const MapImg = require('./Map.jsx');
//require imgs
const randomizeImg = require('../../assets/random.svg');
const randomizeImgSelected = require('../../assets/random-selected.svg');


class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.category = props.params.category;
    this.randomizeImg = randomizeImg;
    this.continueBtnClass = 'f-btn-disabled';
    this.state = { randomizeSelected: false, mapSelected: false };
  }
  componentDidMount() {
    //create event to dispatch when randomize button is clicked, to alert map
    this.randomizeClickEvent = new Event('onRandomizeClick');
    //listening to all map components
    window.addEventListener('onMapSelect', (e) => {
      this.toggleSelectedState(`mapOn${e.detail.areaSelected}`);
    });
    window.addEventListener('onMapUnselect', () => {
      this.toggleSelectedState('mapOff');
    });
  }
  onRandomizeClick() {
    window.dispatchEvent(this.randomizeClickEvent);
    this.toggleSelectedState('mapUnknown');
  }
  toggleSelectedState(mapState) {
    this.setState(
      function () {
        const newState = { randomizeSelected: false, mapSelected: false };
        if (mapState.slice(0, 5) === 'mapOn') {
          newState.mapSelected = true;
          newState.continentCode = mapState.slice(5);
          this.enableButton(true);
        } else if (mapState === 'mapOff') {
          this.enableButton(false);
        } else if (!this.state.randomizeSelected) {
          newState.randomizeSelected = true;
          newState.continentCode = 'randomize';
          this.enableButton(true);
        } else {
          this.enableButton(false);
        }
        return newState;
      }
    );
  }
  toggleColour() {
    //toggle which randomize image will be shown (different colours)
    if (this.state.randomizeSelected) {
      this.randomizeImg = randomizeImgSelected;
    } else {
      this.randomizeImg = randomizeImg;
    }
  }
  enableButton(enable) {
    if (enable) {
      this.continueBtnClass = 'f-btn-proceed';
    } else {
      this.continueBtnClass = 'f-btn-disabled';
    }
  }
  render() {
    this.toggleColour();
    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
          <div className="f-panel f-panel-big">
            <div className="row">
              <div className="col-md-12">
                <h3 className="f-map-title">Pick an area</h3>
                <Link to="/">
                  <h3 className="f-quit">Quit</h3>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <MapImg category={this.category}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img className="f-map-random" src={this.randomizeImg} onClick={this.onRandomizeClick.bind(this)} />
                <div className={`${this.continueBtnClass} f-map-next`}>
                  <Link to={`question/${this.category}/${this.state.continentCode}`}>
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
