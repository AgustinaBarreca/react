import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className= "navbar navbar-dark bg-dark">
        <a href="" className="text-white">
        { this.props.titulo } </a>
        <h1 className="display 1" className="text-white"> AGUSTINA BARRECA </h1>
      </nav>
    )
  }
}

export default Navigation;
