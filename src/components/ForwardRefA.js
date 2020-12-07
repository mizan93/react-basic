import React, { Component } from 'react'
import  ForwardRefB  from "./ForwardRefB";
export class ForwardRefA extends Component {
    constructor(props) {
        super(props)
    
       this.inputRef=React.createRef()
       this.foucsINput=this.foucsINput.bind(this)
    }
    foucsINput(){
this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardRefB ref={this.inputRef}></ForwardRefB>
                <button onClick={this.foucsINput}>focus</button>
            </div>
        )
    }
}

export default ForwardRefA
