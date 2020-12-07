import React from 'react'

const ForwardRefB=React.forwardRef((props,ref)=> {
    return (
        <div>
            <input ref={ref} type="text"></input>
        </div>
    )
})

export default ForwardRefB
