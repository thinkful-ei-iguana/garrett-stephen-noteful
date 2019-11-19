import React, { Component } from "react";

class Main extends Component {
  render() {
    return <ul className="main">{this.props.children}</ul>;
  }
}

export default Main;
