import React, { Component } from "react";
import { hide, show } from "../../redux/actionCreator/tabbarActionCreator";
import store from "../../redux/store";
export default class FilmsDetail extends Component {
  componentDidMount() { 
    console.log('create')
    // dispatch通知
    store.dispatch(hide())
   }
  componentWillUnmount() {
    console.log('destory')
    store.dispatch(show())
  }
    
  render() {
    // return <div>FilmsDetail {this.props.match.params.filmId}</div>;
    return <div>FilmsDetail {this.props.location.state.filmId}</div>;
  }
}
