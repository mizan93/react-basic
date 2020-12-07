import React from 'react'
import ContexcomD from './components/contex/ContexcomD'
import {UserContext,ProfileContex} from '../App'

function ContexcomC() {
    return (
        <div>
        <ContexcomD/>
        <UserContext.Cosummer>
        {
            username=>{
                return (
                    <ProfileContex.Cosummer>
                    {
                        profile=>{
                            return <h2>Name is: {profile}</h2>
                        }
                    }
                    </ProfileContex.Cosummer>
                )
                }
        }
        </UserContext.Cosummer>

        </div>
    )
}

export default ContexcomC
