import React, { Component } from 'react'
import axios from 'axios'
export class Posts extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            posts:[]
       }
   }
   componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
           this.setState({
               posts:response.data
           })
           console.log(response)
       })
       .catch(error=>{
           console.log(error)
       })
   }
   
    render() {
        const{posts}=this.state
        return (
            <div>
                <h1>Posts component</h1>
                {posts.length ? posts.map((post,k)=>{
                    return <h1 key={k}>Title : {post.title}</h1>
                }): "no data"}
            </div>
        )
    }
}

export default Posts
