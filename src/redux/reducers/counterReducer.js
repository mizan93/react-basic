// import { increment_value, decrement_value } from "../types"
import { increment_value, decrement_value } from "../types";
const initialState = {
  count: 5
}
export default function  getvalue(state=initialState, action) {
    switch (action.type) {
        case increment_value:
            return {
              ...state,
              count: state.count + action.payLoad
            }
            case decrement_value:
                return{
                    ...state,
                    count:state.count-action.payLoad
                }
                default:
               return state
    }
}
