import React, { Component } from "react";
import { connect } from "react-redux";
import { hide, show } from "../../redux/actionCreator/tabbarActionCreator";
class FilmsDetail extends Component {
  componentDidMount() {
    this.props.hide();
  }
  componentWillUnmount() {
    this.props.show();
  }

  render() {
    // return <div>FilmsDetail {this.props.match.params.filmId}</div>;
    return <div>FilmsDetail {this.props.location.state.filmId}</div>;
  }
}
// connect第一个参数给孩子传属性 第二个参数给孩子传回调函数
export default connect(null, {
  show,
  hide,
})(FilmsDetail);
