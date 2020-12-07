import React, { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDeriveStaticFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(err, info) {
    console.log(`Error ${err} `);
    console.log(`Info ${info} `);
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default Error;
