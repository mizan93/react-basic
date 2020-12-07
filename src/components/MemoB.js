import React from 'react'

function MemoB({id}) {
    console.log('memmo b')
    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    )
}

export default React.memo(MemoB)
