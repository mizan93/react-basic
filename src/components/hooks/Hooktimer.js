import React,{useState,useEffect,useRef} from 'react'

function Hooktimer() {
    const [timer, settimer] = useState(0)
    const intervalRef=useRef()
    useEffect(() => {
         intervalRef.current=setInterval(() => {
            settimer(prevstate=> prevstate+1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
        <h2>Timer: {timer}</h2>
        <button onClick={()=>clearInterval(intervalRef.current)}>pause timer</button>
        <button onClick={()=>clearInterval(intervalRef.current)}>pause timer</button>
      
        </div>
    )
}

export default Hooktimer
