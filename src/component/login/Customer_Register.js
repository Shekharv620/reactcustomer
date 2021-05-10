import React, { Component } from 'react'
import axios from 'axios';
import {  Button, Form, Table } from 'react-bootstrap';
import { Redirect,Link } from 'react-router-dom';

export default class CusRegister extends Component {
    constructor(props) {
        super(props)


this.initialState = { 
  name: "",
  gender: "",
  balance: "",
  account: "",
  accounttype: "",
  email: "",
  password: "",


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
      // console.log(this.state.name)
        e.preventDefault()
        // for refersh page 
        
        // console.log(this.state)
        // console.log('heelo')
              // const {name,gender,balance,account_no,accounttype ,email,password}=this.state.name;
        let cus = {
            name:this.state.name,
            gender:this.state.gender,
            balance:this.state.balance,
            account_no:this.state.account,
             accounttype:this.state.accounttype,

            email:this.state.email,
            password:this.state.password,
             


        }
        // console.log(cus)
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register", cus)
    .then(res => console.log(res))
    .catch(err => console.log(err));
      
      }

    render()
    {
        if(this.state.loggedIn)
        {
            return <Redirect to='/CustomerLogin' />
    
        }

        return (
         <div className="container1">
         <h1  style={{color:'white', textAlign:'center'}} > Registeration form!!</h1>
            <Form  onSubmit={this.handleSubmit}     style={{ color:'white' , width:'50%',  font: 'Arial, Helvetica, sans-serif'}}>
    <br></br>


  

  <Form.Group controlId="formBasicname">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Name" />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>

  <Form.Group controlId="formBasicgender">
    <Form.Label>gender</Form.Label>
    <Form.Control onChange={this.handleChange}  type="text" name="gender" value={this.state.gender} placeholder="Enter gender" />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>

  <Form.Group controlId="formBasicbalance">
    <Form.Label>Balance</Form.Label>
    <Form.Control type="text" name="balance" value={this.state.balance} onChange={this.handleChange} placeholder="Enter Balance" />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>

    <br></br>
    <Form.Group controlId="formBasicaccount_no">
    <Form.Label>Acount_no</Form.Label>
    <Form.Control type="text" name="account" value={this.state.account} onChange={this.handleChange} placeholder="Enter Account no." />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>


  <Form.Group controlId="formBasicacounttype">
    <Form.Label>accounttype</Form.Label>
    <Form.Control type="text" name="accounttype" value={this.state.accounttype} onChange={this.handleChange} placeholder="Enter account type" />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>
     <Form.Group controlId="formBasicemail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="Enter email" />
    <Form.Text className="text-muted">

    </Form.Text>


  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
  
    <Form.Label>Password</Form.Label>
      
    <Form.Control  type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder=" Enter Password" />
  </Form.Group>

  
                <hr id=''></hr>
  <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> 
      {/* <button type="button" class="btn btn-success btn-lg btn-block">Register</button>
   */}
   <Button variant="primary" type="submit">
    Submit
  </Button>
  {/* <Button type="button" class="btn btn-success">register</Button>
   */}
  <div className="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</Form>
 <br></br>

                <Link to='/' style={{ backgroundColor: '#ffc107', margin: '1rem', marginTop: '1rem', padding: '7px', borderRadius: '5px', fontSize: '1.5rem', color: 'black' }}>
                    Back
                </Link>


</div>


     )
    }
    }

