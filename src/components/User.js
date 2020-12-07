import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.increment=this.increment.bind(this)
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    render() {
        return (
            <div>
                <h1>{this.props.render(this.state.count,this.increment)}</h1>
            </div>
        )
    }
}

export default User
