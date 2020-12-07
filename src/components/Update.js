import React, { Component } from "react";

export class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value === this.state.value) {
      return false;
    }else{
        return true
    }
  }
  componentDidUpdate(prevProps,prevState){
if(prevState.value===3){
    alert('componensdidupdate called')
}
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: this.state.value + 1,
      });
    }, 2000);
  }
  render() {
    console.log("renderd");

    return <div>value: {this.state.value}</div>;
  }
}

export default Update;
