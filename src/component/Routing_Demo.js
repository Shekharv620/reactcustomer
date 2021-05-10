import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
import {Form,Button,Navbar,Nav,FormControl} from 'react-bootstrap'
import HomePage from './HomePage'
import Contact from './Contact'
import AboutUS from "./AboutUs"
import Career from './Career'
import News from './News'

export default class Routing_Demo extends Component {
    render() {
        return (
            <div>
              <h1>  Welcome to the Router_Demo </h1>
              
              <Router>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link as ={Link} to="/">HomePage</Nav.Link>
      <Nav.Link as ={Link} to="/Contact">Contact</Nav.Link>
      <Nav.Link as ={Link} to="/AboutUs">AboutUS</Nav.Link>
      <Nav.Link as ={Link} to="/Career">Career</Nav.Link>
      <Nav.Link as ={Link} to="/News">News</Nav.Link>
      
    </Nav>
  </Navbar>
          
          
               <Switch>       
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/Career' component={Career}></Route>
                <Route path='/News' component={News}></Route>
                <Route path='/Contact' component={Contact}></Route>
                <Route path='/AboutUS' component={AboutUS}></Route>
                </Switch>
                </Router>
                
              {/* <HomePage/>
              <Career/>
              <News/> */}
   


            </div>
        )
    }
}
