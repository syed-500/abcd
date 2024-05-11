import React, { Component } from 'react'

export class Child extends Component {
    constructor(){
        super()
    this.state={
        age:0,
        name:"",
    }
    }
    componentDidMount()
    {
        console.log("HI");
        console.log("RENDER");
    }
    componentDidUpdate(){
        console.log("render");
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}

export default Child