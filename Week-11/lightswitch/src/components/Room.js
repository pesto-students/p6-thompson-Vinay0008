import React from "react";
import { connect } from 'react-redux'

import "../index.css";

class Room extends React.Component {

  constructor(props) {
    super(props)
  }

  // state = {
  //   isLightOn: true
  // };

  // flipLight = () => {
  //   this.setState({
  //     isLightOn: !this.state.isLightOn
  //   });
  // };

  flipLight = () => {
    this.props.dispatch({
      type: 'toggle'
    })
  }

  render() {
    const lightedness = this.props.isOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.flipLight}>flip</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  isOn: state.lightReducer.isOn
})


export default connect(mapStateToProps)(Room);
