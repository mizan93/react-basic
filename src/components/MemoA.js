import React, { Component } from 'react'
import MemoB from './MemoB'
export class MemoA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:5
        }
       
    } componentDidMount(){
setInterval(() => {
    this.setState({
        id:5
    })
}, 1000);
        }
    
    render() {
        return (
            <div>
                <MemoB id={this.state.id}></MemoB>
            </div>
        )
    }
}

export default MemoA
