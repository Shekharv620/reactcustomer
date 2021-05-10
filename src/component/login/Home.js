// import React, { Component } from 'react'

// import { Link, Redirect, Router } from 'react-router-dom';

// export default class Home extends Component {

//     constructor(props) {

//         super(props)


//         const token = localStorage.getItem("token")

//         let loggedIn = true
//         if (token == null) {
//             loggedIn = false
//         }

//         else {

//             console.log(token)

//         }

//         this.state = {

//             loggedIn

//         }

//     }


//     render() {

//         if (this.state.loggedIn === false) {

//             console.log(this.state.loggedIn)

//             return <Redirect to='/home' />

//         }

//         return (

//             <div>

//                 <h1>Home Page !!!</h1>

//                 <Link to='/logout'
//                     style={{ float: 'right', marginRight: '40px' }}>
//                     Logout
//                 </Link>

//             </div>

//         )

//     }

// }


import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {  Image,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

export default class Home extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true

        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    render() {

        if (this.state.loggedIn === false) {
            return < Redirect to='/home' />
        }

        return (

            <div style={{ textAlign: 'center' }}>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">Site</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Customer_List">CustomerList</Nav.Link>
      <Nav.Link href="/Customer_Register">Registration</Nav.Link>
      <Nav.Link href="/Customer_Register"></Nav.Link>      
        </Nav>
    <Form inline>
     
      {/* <Button variant="outline-info" >Logout</Button> */}
    <a href="/logout" class="outline-info">Logout</a>
    </Form>
  </Navbar>



                {/* <Image src="https://images.unsplash.com/photo-1579256945418-f3b7eab8073a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZW1wbG95ZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=251" fluid /> */}
            {/* <img src="https://source.unsplash.com/user/jackie/likes/1600x900"> */}
                    <h1 className="h1 primary"> welcome </h1>
                    <img  class="onee" src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80"/>


                {/* <Link to='/logout' style={{ margin: "5rem 2rem 10rem 2rem", backgroundColor: '#343a40', padding: '4px', borderRadius: '5px', fontSize: '1rem', color: 'white' }}>
                    Logout
                </Link>

                <Link to='/Customer_List' style={{ margin: "5rem 2rem 10rem 2rem", backgroundColor: '#343a40', padding: '4px 20px 4px 20px ', borderRadius: '5px', fontSize: '1rem', color: 'white' }}>
                    List
                </Link>
                <Link to='/Customer_Register' style={{ margin: "5rem 2rem 10rem 2rem", backgroundColor: '#343a40', padding: '4px', borderRadius: '5px', fontSize: '1rem', color: 'white' }}>
                    Register                </Link>
 */}
            </div>
        )
    }
}

