const React = require('react');
const Nav = require("./Nav.jsx");


class Main extends React.Component {
  constructor() {
    super();
    const FrenchlyProgress = {
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
    };
    if (!localStorage.getItem('FrenchlyProgress'))
    localStorage.setItem('FrenchlyProgress', JSON.stringify(FrenchlyProgress));
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
