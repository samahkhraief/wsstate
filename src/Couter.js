import React, { Component } from 'react'

export class Couter extends Component {
    state={
        intervall :null,
        timer :0
      }
      componentDidMount(){
        this.setState({
          intervall:setInterval(()=>{
            this.setState({timer:this.state.timer +1})     }, 1000),
        });}
        componentWillUnmount(){
            clearInterval(this.state.intervall)
        }
    render() {
    
    return (
      <div><h2> {this.state.timer} </h2></div>
    )
  }
}

export default Couter