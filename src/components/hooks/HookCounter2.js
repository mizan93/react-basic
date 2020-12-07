import React ,{useState,useEffect}from 'react'

function HookCounter2() {
    const [count, setcount] = useState(0)
    const [name, setname] = useState('')
    useEffect(() => {
        console.log('djkfj')
        document.title='count '+count
    },[count])
    return (
        <div>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
        <h2>Name is {name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>setcount(count+1)}>incrment</button>
        </div>
    )
}

export default HookCounter2
