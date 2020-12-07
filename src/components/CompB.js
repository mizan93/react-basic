import React, { Component } from "react";
import CompC from "./CompC";
import { UserCosumer } from "./UserContext";

export class CompB extends Component {
  render() {
    return (
      <UserCosumer>
        {(value) => {
          return (
            <div>
              <CompC>
              </CompC>
              <h1>Hello, {value} and this is from Comp B</h1>

            </div>
          );
        }}
      </UserCosumer>
    );
  }
}

export default CompB;
