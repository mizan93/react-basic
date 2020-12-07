/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect} from 'react'
import axios from 'axios'
function fetchdatahook() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
           <ul>
           {posts.map(post=>{
               return <li key={post.id}>{post.title}</li>
           })}
           </ul>
        </div>
    )
}

export default fetchdatahook
