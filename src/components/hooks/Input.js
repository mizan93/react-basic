import React,{useState,useRef,useEffect}from 'react'

function Input() {
    const [name, setname] = useState('')
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" onChange={()=>setname(inputRef.current.value)}/>
            <p>Name is {name}</p>
        </div>
    )
}

export default Input
