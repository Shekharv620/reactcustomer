import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isShow:true
        }
    }
    
    showHideContent()
    {
       this.setState((state)=>(
           {
                isShow:false
           }
                        ))
    }
    
    render() {
        return (
            <div>
                    <h1>EventHandling</h1>  
                    <button onClick={this.showHideContent.bind(this)}>
                        {this.state.isShow ? 'hide': 'show'}
                        </button>          
            </div>
        )
    }
}
