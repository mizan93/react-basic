import React, { Component } from "react";

export class Classtimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevstate => ({
        timer: prevstate.timer + 1,
      }));
    }, 1000);
  }
//   componentWillMount() {
//     clearInterval(this.interval);
//   }
componentWillUnmount(){
    clearInterval(this.interval)
}
  render() {
    return (
      <div>
        <h2>Timer: {this.state.timer}</h2>
        <button onClick={()=>clearInterval(this.interval)}>pause timer</button>
      </div>
    );
  }
}

export default Classtimer;
