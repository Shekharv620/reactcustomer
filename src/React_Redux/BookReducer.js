import {BUY_BOOKS} from './BookType'

const initialState={
    noOfBooks:10
}

const BookReducer=(state=initialState,action)=>{
    switch(action.type){     
    case BUY_BOOKS:return{
        ...state,
        noOfBooks:state.noOfBooks+1
    }
     default:return state
}
}
export default BookReducer;