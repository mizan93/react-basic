import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"User"
        }
        this.gretting=this.gretting.bind(this)
    }
    gretting(data){
        // alert('hello '+this.state.msg)
        alert(`Hello ${this.state.msg}! ${data}`)
    }
    render() {
        return (
            <div>
              <Child gretingmethod={this.gretting}></Child>  
            </div>
        )
    }
}

export default Parent
