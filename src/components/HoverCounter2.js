import React, { Component } from "react";

export class HoverCounter2 extends Component {
  render() {
    return (
      <div>
        <h1>Value: {this.props.count}</h1>
        <button onMouseOver={this.props.increment}>Increment</button>
      </div>
    );
  }
}

export default HoverCounter2;
