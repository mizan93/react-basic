import React,{useEffect,useState} from 'react'
import MouseMove from './MouseMove'


function MouseContainer() {
    const [show, setshow] = useState(true)
    return (
        <div>
        <button onClick={()=>setshow(!show)}>toggle show</button>
            {show && <MouseMove></MouseMove>}
        </div>
    )
}

export default MouseContainer
