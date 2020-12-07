import React, { Component } from 'react'

export default class Click2 extends Component {
    click=()=>{
        console.log('You clicked me')
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>click me</button>
            </div>
        )
    }
}
