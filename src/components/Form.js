import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      color: "Select Color",
    };
    this.namechangehandler = this.namechangehandler.bind(this);
    this.commentchangehandler = this.commentchangehandler.bind(this);
    this.colorchangehandler = this.colorchangehandler.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  namechangehandler(event) {
    this.setState({
      name: event.target.value,
    });
  }
  commentchangehandler(event) {
    this.setState({
      comment: event.target.value,
    });
  }
  colorchangehandler(event) {
    this.setState({
      color: event.target.value,
    });
  }
  submithandler(e) {
    e.preventDefault();
    alert(`name: ${this.state.name}, Comment: ${this.state.comment}, Color: ${this.state.color}`);
    this.setState({
      name: "",
      comment: "", 
      color: "Select Color",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submithandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.namechangehandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Comment</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.comment}
              placeholder="comment"
              onChange={this.commentchangehandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Color</label>
            <select  value={this.state.color} onChange={this.colorchangehandler}>
              <option value="Select Color" selected disabled>Select Color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="gray">Gray</option>
            </select>
          </div>

          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
