import { increment_value,decrement_value } from "../types"

export const increment=(a)=>{
    return{
        type:increment_value,
        payLoad:a
    }
}
export const decrement=(a)=>{
    return{
        type:decrement_value,
        payLoad:a
    }
}