import React, { Component } from 'react'

export default class ShowHide extends Component {
constructor(props) {
    super(props)

    this.state = {
         toShow:true
    }
}



operation(){
    this.setState({
        toShow:!this.state.toShow
    })
}


    render() {
        return (
            <div>
            
              <h1>hide show content</h1>
{/*               
            {  
            this.state.toShow?
            <h3>to hide it click on hide button</h3>
             :null       
                 } */}
                       {/* /// <button  onClick>show</button>                  */}
                      <button onClick={this.operation.bind(this)}>
                          {this.state.toShow? 'hide':'show'}
                          </button>
                          {this.state.toShow &&
                          <div>
                              <p>dfgbhhdjshdbjsdjshdjshjssnc
                              sjjkjdjds
                              sjksjsnkasdkjsds
                              ssskjnskaksnjkshbebhbebehbhb
                              </p>
                          </div>
                          }
            </div>
        )
    }
}

