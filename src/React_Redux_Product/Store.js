import NameReducer from './Reducer/NameReducer'
import IdReducer from './Reducer/IdReducer'
import productReducer from './Reducer/productReducer'
import {createStore,combineReducers} from 'redux' ;

const Reducer=combineReducers({
    name1:NameReducer,
    id1:IdReducer,
    product1:productReducer
})

const Store=createStore(Reducer);
export default Store;

//

// import Reducer from './Reducer';

// import { createStore } from 'redux'

// const Store = createStore(Reducer);

// export default Store;

//import BookReducer from './BookReducer';
// import PenReducer from './PenReducer';
// import { createStore, combineReducers } from 'redux'

// //combine reducer
// const reducer=combineReducers({
//     book:BookReducer,
//     pen:PenReducer
// })

// //const Store = createStore(BookReducer);

// const Store = createStore(reducer);

// export default Store;


