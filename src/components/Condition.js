import React, { Component } from 'react'

export class Condition extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 isUser:true
            }
        }
        render() {
            //Element Variables

            // let msg;
            // if(this.state.isUser){
            //     msg=<div>hello user</div>
            // }else{
            //     msg=<div>Hello Guest</div>
            // }
            // return(
            //     <div>{msg}</div>
            // )

            // Conditional Oparetor
            // if (this.state.isUser) {
            //     return(
            //         <div>Hello User!</div>
            //     )
            // }else{
            //     return(
            //         <div>Hello Guest!</div>
            //     )
            // }
     return this.state.isUser && <div>Hello user</div> 
        
        }
        
    }


export default Condition
