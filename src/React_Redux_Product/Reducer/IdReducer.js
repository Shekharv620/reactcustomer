 import {Product_id} from '../Types/idType'

const initialStateID={
     id:"567"
}
const IdReducer=(state=initialStateID,action)=>{
    switch(action.type){
        case Product_id: 
            return{
            ...state,
            id:"124"
        }
        default :return state
    }   
}

export default IdReducer