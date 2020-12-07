import React, { Component } from 'react'
import axios from 'axios'
export class POstform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             job:'',
        }
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitform=(e)=>{
        e.preventDefault()
        axios.post('https://reqres.in/api/users',this.state)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render() {
        const{name,job}=this.state
        return (
            <div>
                <form onSubmit={this.submitform}>
                <input type="text" name="name" value={name} onChange={this.handlechange} placeholder="name"/>
                <input type="text" name="job"  value={job} onChange={this.handlechange} placeholder="job"/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default POstform
