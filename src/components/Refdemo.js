import React, { Component } from "react";

export class Refdemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus()
  }
  submit(e) {
    e.preventDefault();
    console.log(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Refdemo;
