const initialState = {
    product_name:"Samsung",
    product_price:12000.0
}

const productReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "Product":return {
            ...state,
            product_name:state.product_name,
            product_price:state.product_price
        }
        default:return state
    }
}


export default productReducer;