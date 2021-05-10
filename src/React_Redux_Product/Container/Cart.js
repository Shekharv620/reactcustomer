import React  from 'react'
import {connect} from 'react-redux';


 export default function Cart(props)  {
    return (
      <div>
           <h1>Cart Details</h1>
           {/* <h2>ProductName:{props.product_name}</h2>
           <h2>ProductPrice in Rs:{props.product_price}</h2> */}
      </div>
    )
  }

//   const mapStateToProps=(state)=>{
//     return {
//         product_name:state.product_name,
//         product_price:state.product_price
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         product:function(){
//             dispatch(product());
//         }
//     }
// }
// export default Cart;