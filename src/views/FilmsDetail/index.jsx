import React, { Component } from "react";

export default class FilmsDetail extends Component {
  render() {
    // return <div>FilmsDetail {this.props.match.params.filmId}</div>;
    return <div>FilmsDetail {this.props.location.state.filmId}</div>;
  }
}
