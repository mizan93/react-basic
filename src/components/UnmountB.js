import React, { Component } from 'react'

export class UnmountB extends Component {
    componentWillUnmount(){
        console.log('good bye')
    }
    render() {
        return (
            <div>
                <h1>Child</h1>
            </div>
        )
    }
}

export default UnmountB
