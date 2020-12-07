import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    render() {
        return (
            <div>
                <h1>Value: {this.props.count}</h1>
                <button onClick={this.props.increment}>Increment</button>
            </div>
        )
    }
}

export default ClickCounter2
