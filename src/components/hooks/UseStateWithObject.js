import React, { useState } from 'react'

function UseStateWithObject() {
    const [info,setInfo]=useState({
        name:"",
        id:"",
        
    })
    return (
        <div>
        <form>
            <input value={info.name} onChange={(e)=>setInfo({...info, name:e.target.value})}/>
            <input value={info.id} onChange={(e)=>setInfo({...info, id:e.target.value})}/>
            
            </form><h1>Name: {info.name}</h1>
            <h1>Id: {info.id}</h1>
        </div>
    )
}

export default UseStateWithObject
