import React from 'react'

function ButtonUsecallbac({text,increment}) {
    console.log('rendaring'+text )
    return (
        <div>
            <button onClick={()=>increment()}>increment {text}</button>
        </div>
    )
}

export default React.memo(ButtonUsecallbac) 
