import {BUY_CAKE} from './cakeTypes'
const initialState={
    numOfCake:20
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake:noOfCake-1
        }
        default: return state
    }

}
export default cakeReducer