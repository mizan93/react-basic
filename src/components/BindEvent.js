import React, { Component } from "react";
class BindEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isToggleOn:true,
      msg: "Welcome",
    }
    this.clickhandler=this.clickhandler.bind(this)
    this.toggleONOff=this.toggleONOff.bind(this)
  }
  clickhandler  () {
    this.setState({
        msg: "Good bye" ,
      });
  };
  toggleONOff(){
      this.setState(prevstate =>({
          isToggleOn: !prevstate.isToggleOn
      }))
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={this.clickhandler}>Click</button><br></br>
        <button onClick={this.toggleONOff}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}
export default BindEvent;
