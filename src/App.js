import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './component/Student';
import Teacher from './component/Teacher';
import Gallery from './component/Gallery';
import Constructor from './component/Constructor';
import ComponentLifeCycle from './component/ComponentLifeCycle';
import EventHandling from './component/EventHandling'
import ShowHide from './component/ShowHide'
import Hooks_demo from './component/Hooks_demo'
import Practice from './component/Practice'
import Hooksdiffer from './component/Hooksdiffer'
import CustomHooks from './component/CustomHooks'
import Form_demo from './component/Form_demo'
import Router1  from './component/Router1'
import Routing_Demo from './component/Routing_Demo'
import { Provider } from 'react-redux'
// import Store from  './React_Redux/Store'
import Store from './React_Redux_Product/Store'
import BookContainer from './React_Redux/BookContainer'
import Cake_Container from './React-Redux_online/cakes/Cake_Container'
import HooksCakeContainer from "./React-Redux_online/cakes/HooksCakeContainer"
import HooksBookContainer from './React_Redux/HooksBookContainer'
import Productcontainer from './React_Redux_Product/Container/Productcontainer'
import DemoContainer from './React_Redux_Product/Container/democontainer'
import AxiosGetRequest from './component/AxiosGetRequest'
import CustomerLogin from './component/login/CustomerLogin'
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
import Home from './component/login/Home'
import CustomerLogout from './component/login/CustomerLogout'
import Customer_Register from './component/login/Customer_Register'
import Customer_List from './component/login/Customer_List'
import UpdateCustomer from './component/login/UpdateCustomer'


//import Protected from './component/login/Protected'
function App() {
       
         // const getdata= CustomHooks();
          //const getdata1= CustomHooks();
       
  return (
      // <Provider store={Store}>
    <div className="App">
      <Router>
        
          <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/logout' component={CustomerLogout}></Route> 
            <Route exact path='/' component={CustomerLogin}></Route>
            <Route  exact path='/Customer_Register' component={Customer_Register}></Route> 
            <Route exact path='/Customer_List' component={Customer_List}></Route> 
            <Route exact path='/UpdateCustomer' component={UpdateCustomer}></Route>
          </Switch>
           
  
    </Router>   
      {/* <AxiosGetRequest/> */}
      {/* <DemoContainer/>
      <Productcontainer/> */}
    {/* <HooksBookContainer/> */}
      {/* <HooksCakeContainer/> */}
      {/* <Cake_Container/> */}
      {/* <BookContainer/> */}
{/*       
      <Teacher name="Shekhar Verma" subject="Science" education="msc" salary={40000} /> 
   */}
     {/* <Gallery />  */}
     {/* <h1>Constructor Demo</h1> */}
     {/* <Constructor name="  Raj" fees="  4000" course=" java"/>
   <Constructor name="  Sham" fees="  45000" course="  python"/>
   <Constructor name=" Jack" fees="  6000" course=" react"/> */}
  {/* <ComponentLifeCycle /> */}
  {/* <ComponentLifeCycle  department="IT" shift="Night" salary={456789} /> */}
 {/* <EventHandling /> */}
 {/* <ShowHide/> */}
 {/* <Practice/> */}
  {/* <Hooks_demo/> */}
  {/* <Hooksdiffer/> */}
  {/* <CustomHooks/>
  <h1>value:{getdata.num}</h1>
  <button onClick={getdata.increment}>+</button>
  <button onClick={getdata.decrement}>-</button>
  
  <h1>value:{getdata1.num}</h1>
  <button onClick={getdata1.increment}>+</button>
  <button onClick={getdata1.decrement}>-</button>
   */}
  
   {/* <Form_demo /> */}
   {/* <Router1/> */}
   {/* <Routing_Demo/> */}
    {/* <bookContainer/> */}
    
    </div>
  
  );
}

export default App;

