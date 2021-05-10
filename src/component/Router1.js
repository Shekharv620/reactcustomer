import React, { Component } from 'react' 
import Form_demo from './Form_demo';
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
export default class Router1 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>  
                        <Header/>
                 <Switch>       
                <Route exact path='/' component={Home}></Route>
                <Route path='/Contact' component={Form_demo}></Route>
                <Route path='/AboutUS' component={AboutUs}></Route>
                <Route path='/Help' component={Help}></Route>
                <Route component={Error}></Route>
                </Switch>
                </div>
                </Router>   
            </div>   
        )
    }
}       

function Header(){
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/Contact'>Contact</Link> </li>
                <li><Link to='/AboutUs'>AboutUs</Link> </li>
                <li><Link to='/Help'>Help</Link> </li>
            </ul>

        </div>
    ) 
}

function Error(){
    return(
        <div>
            <h2 style={{color:'red'}}>Error 404</h2>
        <p>This is home Page</p>
        </div>
    )
}



function Home(){
    return(
        <div>
            <h2>Home Page</h2>
        <p>This is home Page</p>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h2>Contact Page</h2>
        <p>This is Contact Page</p>
        </div>
    )
}

function AboutUs(){
    return(
        <div>
            <h2>AboutUs Page</h2>
        <p>hello everyone Page</p>
        </div>
    )
}
function Help(){
    return(
        <div>
            <h2>Help!!!!</h2>
        <p>This is help Page</p>
        </div>
    )
}

