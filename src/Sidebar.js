import React, { Component } from 'react'

class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div class="sidenav">
        <Clock />
        bluebs: {this.props.bluebs}/{this.props.maxbluebs} <br />
        birbs: {this.props.birbs}/{this.props.maxbirbs} <br />
      </div>
    )
  }
}

class Clock extends Component{
  constructor(props){
    super(props); //the parent constructor
    this.state = {date: new Date()}; //the date object has the time
  }
  componentDidMount(){  //lifecycle methods... runs after its rendered
    this.timerID = setInterval( //sets up the ticking timer
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){ //runs when clock is unrendered
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({ //the setState() tells react that the state changed and so rerenders
      date:new Date()}); //this is why you should not modify state directly, except in constructor
  }
  render(){
    return(
    <div>
      {this.state.date.toLocaleTimeString()}
    </div>);
  }
}

export default Sidebar
