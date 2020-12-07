import React from 'react'

function Click1() {
    const clickhandler=()=>{
        console.log('clicked')
    }
    return (
        <div>
            <button onClick={clickhandler}>click</button>
        </div>
    )
}

export default Click1
