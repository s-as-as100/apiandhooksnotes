import React,  { Component ,useState} from 'react';
class SetState extends Component {
    constructor(){
        super()
        this.state = { 
            count:0
         }

         this.increment = this.increment.bind(this)
    }
   
     
  increment() {
    //   alert("increase call")
   this.setState({count: this.state.count + 1}, 
    ()=> {
        console.log(this.state.count)
    })

    this.setState((prevState)=>{
        return {
            count: prevState.count
        }
    })
//   console.log(this.state.count)
  }
  


    render() { 
        return (
            <div>
                <h1>USE OF setState{this.state.count}</h1>

                <button onClick={this.increment} >Increment</button>
            </div>
          );
    }
}
console.log(useState)
 
export default SetState;