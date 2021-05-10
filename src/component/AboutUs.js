import React, { Component } from 'react'
import {Row,Col,Image,Container} from 'react-bootstrap'
//import {Helmet} from 'react-helmet';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image style={{height:"250px",width:"250px"}} src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image style={{height:"250px",width:"250px"}} src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{height:"250px",width:"250px"}} src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" thumbnail />
    </Col>
  </Row>
</Container>
<Container>
    <p>this website is use to show the use of react and by using raeat.js you will create a attrective user interface .</p>
</Container>
<div className="application">
            
                <style>{'body { background-color: red; }'}</style>
            
            ...
        </div>
            </div>
        )
    }
}
