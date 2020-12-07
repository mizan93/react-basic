import React,{useState,useCallback} from 'react'
import ButtonUsecallbac from './ButtonUsecallbac'

function UseCallbackHook_parent() {
    const [id, setid] = useState(0)
    const [count, setcount] = useState(0)
    const incrementId=useCallback(()=>{
        setid(id+1)
    },[id])
    const incrementcount=useCallback(()=>{
        setcount(count+1)
    },[count])
    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>Count: {count}</h2>
            <ButtonUsecallbac text="ID" increment={incrementId}/>
            <ButtonUsecallbac text="Count" increment={incrementcount}/>
        </div>
    )
}

export default UseCallbackHook_parent
