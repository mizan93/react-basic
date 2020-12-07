import React,{useState} from 'react'

function UseStateWithArray() {
    const [lists, setlists] = useState([])
    const generatlist=()=>{
        setlists([...lists,{
            id:lists.length,
            value: Math.random()
        }])
    }
    return (
        <div>
        <button onClick={generatlist}>generatelist</button>
            {lists.map(list=>{
return <li key={list.id}>{list.value}</li>
            })}
        </div>
    )
}

export default UseStateWithArray
