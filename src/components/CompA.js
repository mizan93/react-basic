import React, { Component } from 'react'
import CompB from './CompB'

export class CompA extends Component {
    render() {
        return (
            <div>
            <CompB name={this.props.name}></CompB>
            </div>
        )
    }
}

export default CompA
