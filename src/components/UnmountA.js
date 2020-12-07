import React, { Component } from 'react'
import UnmountB from './UnmountB'
export class UnmountA extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            isOpen:false
       }
   }
   
    render() {
        return (
            <div>
                <h1>Parent</h1>
                {this.state.isOpen &&
                <UnmountB></UnmountB>
                }
                <button onClick={()=>(this.setState({isOpen: !this.state.isOpen}))}>click</button>
            </div>
        )
    }
}

export default UnmountA
