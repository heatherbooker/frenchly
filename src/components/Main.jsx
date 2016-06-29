const React = require('react');
const Nav = require("./Nav.jsx");


class Main extends React.Component {
  constructor() {
    super();
    window.FrenchlyProgress = 0;
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
