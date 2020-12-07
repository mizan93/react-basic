import React from 'react'
import Person from './Person'
function List() {
    const persons=['a','b','c']
    // const plist=persons.map((person,k)=><Person person={person} key={k}></Person>)
    return (
        persons.map((person,k)=><Person person={person} key={k}></Person>)
        // <div>
        
        // {plist }
           
        // </div>
    )
}

export default List
