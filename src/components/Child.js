import React from 'react'

function Child(props) {

    return (
        <div>
            <button onClick={()=>props.gretingmethod('I am from child')}>Grtting</button>
        </div>
    )
}

export default Child
