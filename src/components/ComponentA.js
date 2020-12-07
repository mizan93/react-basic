import React, { Component } from "react";
import ComponentB from './ComponentB'
export class ComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
    this.increment = this.increment.bind(this);
  }
  static getDerivedStateFromProps() {}
  increment() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  // componentDidMount(){

  // }

  render() {
    return <div>
    <h1>value:{this.state.value}</h1>
    <button onClick={this.increment}>Increment</button>
    <ComponentB data={this.state.value}></ComponentB>

    </div>
  }
}

export default ComponentA;
