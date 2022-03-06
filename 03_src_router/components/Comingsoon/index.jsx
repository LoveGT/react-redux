import React, { Component } from "react";
import axios from "axios";

export default class Comingsoon extends Component {
  componentDidMount() {
    axios.get(
      "/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=AFFC57909D4411ECA4805F19CD0F72CE080E00F5AB364073BC337568D34E33B4&optimus_risk_level=71&optimus_code=10"
    ).then(res=> {
      console.log(res)
    })
  }
  render() {
    return <div>Comingsoon</div>;
  }
}
