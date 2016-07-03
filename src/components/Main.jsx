const React = require('react');
const Nav = require("./Nav.jsx");


class Main extends React.Component {
  constructor() {
    super();
    window.FrenchlyProgress = {
      score: 0,
      Countries: {
        na: false,
        sa: false,
        af: false,
        eu: false,
        as: false,
        oc: false
      }, Nationalities: {
        na: false,
        sa: false,
        af: false,
        eu: false,
        as: false,
        oc: false
      }
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
