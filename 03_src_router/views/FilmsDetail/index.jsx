import React, { Component } from "react";

export default class FilmsDetail extends Component {
  componentDidMount() { 
    console.log('create')
   }
  componentWillUnmount() {
    console.log('destory')}
  render() {
    // return <div>FilmsDetail {this.props.match.params.filmId}</div>;
    return <div>FilmsDetail {this.props.location.state.filmId}</div>;
  }
}
