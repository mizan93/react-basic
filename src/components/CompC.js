import React, { Component } from "react";
import { UserCosumer } from "./UserContext";

export class CompC extends Component {
  render() {
    return (
      <UserCosumer>
        {(value) => {
          return (
            <div>
              <h1>Hello, {value} and this is from Comp C</h1>
            </div>
          );
        }}
      </UserCosumer>
    );
  }
}

export default CompC;
