import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newValue:0
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            newValue:props.data*5
        }
    }
    
    render() {
        return (
            <div>
                component B
                <h1>{this.state.newValue}</h1>
            </div>
        )
    }
}

export default ComponentB
