import React, { Component } from 'react'

export default class Constructor extends Component {

    constructor(props)
     {
        super(props);
        this.state={
             name:"shekhar",
             course:this.props.course,
             fees:this.props.fees,
        }
       this.stateHandling=this.stateHandling.bind(this);

}

        updateCounter=()=>
        {
            this.setState((state)=>(
                {
                    name:state.name +"ujwal",
                    course:state.course+"react",
                    fees:state.fees+"567890"
                }
            ))
        }

stateHandling()
{
    this.updateCounter()
    this.updateCounter()
}
static getDerivedStateFromProps(){

}
    render() {
        return (
            <div>
                
                            <h2>hello {this.state.name}</h2>                
                    
                            <h2>Record</h2>                  
                            {/* <h3>Name:{this.state.count}</h3> */}
                            <h3>course:{this.state.course}</h3>
                            <h3>Fees:{this.state.fees}</h3>      
                                    
                    <button onClick={this.stateHandling}>update record</button> 

            </div>
        )
  }  

}
