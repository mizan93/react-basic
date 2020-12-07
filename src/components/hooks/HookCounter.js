import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
    const increment=()=>{
for (let i = 0; i <10; i++) {
    setCount(prevState=> prevState+1)
    
}  
    }
    return (
        <div>
            <h1> Value: {count} from hook</h1>
             <button onClick={()=>increment()}>increment</button>
        </div>
    )
}

export default HookCounter
