import React,{useState,useEffect} from 'react'

function MouseMove() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logmousemove=(e)=>{
setx(e.clientX)
sety(e.clientY)
console.log('mousemove')

    }
    useEffect(() => {
        console.log('useeffect')
window.addEventListener('mouseover',logmousemove) 
return()=>{
    console.log('component removed')
    window.removeEventListener('mousemove',logmousemove)
} 
},[])
    return (
        <div>
            <h2>X-{x} and Y-{y}</h2>
        </div>
    )
}

export default MouseMove
