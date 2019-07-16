import React, { Component } from 'react'

class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const show = this.props.visibleResources
    const res = this.props.resources
    return (
      <div className="sidenav">
        {this.props.time[0]} day {this.props.time[1]} hour {this.props.time[2]} <br />
        ~~~~~~~~~~~~~~
        <Resource name='birbs' res={this.props.birbs} max={this.props.maxbirbs} show={show} />
        <ResourceLine name='bluebs' res={res} show={show} />
        <ResourceLine name='wood' res={res} show={show} />
        <ResourceLine name='knowledge' res={res} show={show} />
      </div>
    )
  }
}
function ResourceLine(props) {
  return (<Resource name={props.name} res={props.res[props.name]} max={props.res['max'+props.name]} show={props.show} />)}

class Resource extends Component{
  constructor(props){super(props);}
  round(n){
    if (n>1000000){
      return (parseFloat((n/1000000.).toFixed(2))+'m')}
    if (n>1000){
      return (parseFloat((n/1000.).toFixed(2))+'k')}
    if (n>100){
      return Math.round(n)}
    if (Math.abs(n - Math.round(n)) > .001){
      return n.toFixed(2)}
    else{return Math.round(n)}
  }
  render() {
    if (this.props.show.includes(this.props.name)){
      return (
        <div className='sidebar-item'>
          {this.props.name}: {this.round(this.props.res)}/{this.round(this.props.max)} <br/>
          <div className='sidebar-item-mouseover'> hi </div>
        </div>)}
    else{return(<div />)}
  }
}

/*class Clock extends Component{
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
}*/

export default Sidebar
