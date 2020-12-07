import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
   constructor(props) {
       super(props)
   
       this.state = {
            id:5
       }
   }
   componentDidMount(){
       setInterval(() => {
           this.setState({
               id:this.state.id*2
           })
       }, 2000);
   }
    render() {
        console.log(`Renderd`)
        return (
            <div>
            <h1>Id: {this.state.id}</h1>
                
            </div>
        )
    }
}

export default Purecomp
