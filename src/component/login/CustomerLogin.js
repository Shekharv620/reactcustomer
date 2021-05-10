//  import React, { Component } from 'react';
// import axios from 'axios';
// import {Button} from 'react-bootstrap';
// import { Redirect } from 'react-router-dom'

// export default class CustomerLogin extends Component {
//     constructor(props) {
//         super(props)

//         const token = localStorage.getItem("token")
//         let loggedIn = true
//         if (token ==  null)
//         {
//             loggedIn = false
//         }
//         else
//         {
//             console.log(token)
//         }
  
      
  
    
//         this.initialState = {
//              email:"",
//              password:"",
//              result:{},
//              name:"",
//             loggedIn       
//         }
//         this.state=this.initialState;
//         this.onSubmitHandler=this.onSubmitHandler.bind(this);
//         this.onChangehandler=this.onChangehandler.bind(this);
//     }

//    onChangehandler(e){
//         const name = e.target.name;
//         const value = e.target.value;

//         this.setState({
//             [name]:value
//         })
//    } 

//    onSubmitHandler(e){
//         e.preventDefault()
     
//         let dic = {
//             email:this.state.email,
//             password:this.state.password
//           }
//         axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",dic)
//         .then(response => {
//               console.log(response.status)
//         if(response.status===200){
//           localStorage.setItem("token","logincheck")
//           this.setState({loggedIn:true})
        
//       }
            
//               //  localStorage.setItem("id",dic["id"]);
          
//             // this.setState({
//             //      name:response.data
//             // })
//         }).catch(error => {
//             console.log(error)
//         })
         
//         // this.setState(this.initialState)
//         // alert("not same")
//         //  console.log(this.state.name)
//    } 
    
  

//   render() {


    
//       if (this.state.loggedIn)
//       {    
//       return <Redirect to= "/home"/> 
//       }

//     return (
//       <div>
//           <h1 style={{color:'red'}}>Customer Login</h1>
//           <form onSubmit={this.onSubmitHandler}>
//                Email:
//                <input type="email" name="email" value={this.state.email}
//                 onChange={this.onChangehandler}
//                 placeholder="Enter a Email" /><br></br>
//                 Password:
//                <input type="password" name="password" value={this.state.password}
//                 onChange={this.onChangehandler}
//                 placeholder="Enter a Password" /><br></br>
//                 <Button type="submit" variant="btn btn-primary">
//                      Login
//                 </Button>
//           </form>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import axios from 'axios';
import { Container,Col,Row, Button, Form, Table, ButtonToolbar} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
export default class CustomerLogin extends Component {
 
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true

        if (token ==  null)
        {
            loggedIn = false
        }
        else
        {
            console.log(token)
        }
        this.initialState = {
            email:"",
            password:"",
            loggedIn
        }
        this.state=this.initialState;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e)
    {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]:value
        })
    }

    handleSubmit(e)
    {
        e.preventDefault()
              const {email,password}=this.state;
        let cus = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",cus).then(response => { 
            console.log(response.data.message)
         let result=response.data.message
                         if(result==="email and password are not same")
                         {
                           alert(result)
                           return
                         }
            if (this.state.email===email && password === this.state.password )
            {
              
                localStorage.setItem("token","logincheck")
                alert("success")
                this.setState({
                    loggedIn:true
                })
                console.log(this.state)
            }
            // else{
            //   alert("fail")
            // }
        }).catch(error =>{
            console.log(error)
        }) 
    }
    
    render() {

        if(this.state.loggedIn)
        {
            return <Redirect to='/Home' />
        }

        return (
            

<div  className="container2" >

            <h1 style={{color:'white', textAlign:'center'}}>Customer Login !!!</h1>
      <Form onSubmit={this.handleSubmit}>
      <Form.Row>
    
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={{color:'white', fontVariant:'inherit' }} > Email</Form.Label>
      <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label style={{color:'white' }}>Password</Form.Label>
      <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
    </Form.Group>
  </Form.Row>
  <Button className="btn btn-success" variant="primary" type="submit">
    Submit
  </Button>
</Form> 
<br/><br/>
  {/* <div > <button  style={{float:'left',marginLeft: '40px' , ButtonToolbar:'0px'}} type="button" class="btn btn-outline-success">Register<Link to='/Customer_Register' style={{float:'left',marginLeft: '40px'}}>
                     </Link></button></div> */}
              <div style={{position: 'relative', height:'200px'}}>       <a style={{float:'left',marginLeft:'10px', bottom:'00%' }} class="btn btn-danger" href="/Customer_Register" role="button">Sign In</a>
            </div>
    </div>

                
        )
    }
}


