import React, { Component } from 'react'

class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const show = this.props.visibleResources
    const res = this.props.resources
    const resourceList = ['bluebs', 'wood', 'knowledge']

    var seasonalBar = "sidebar-" + this.props.time[0]
    return (
      <div className={seasonalBar}>
        {this.props.time[0]} day {this.props.time[1]} hour {this.props.time[2]} <br />
        ~~~~~~~~~~~~~~
        <Resource name='birbs' res={this.props.birbs['total']} max={this.props.birbs['maxbirbs']} show={show}/>
        {resourceList.map(name =>
          <ResourceLine name={name} res={res} show={show}
          incomes={res[name].incomes} effects={res['max'+name].effects} />)}
      </div>
    )
  }
}
function ResourceLine(props) {
  return (<Resource name={props.name} res={props.res[props.name].number} max={props.res['max'+props.name].number} show={props.show}
  incomes={props.incomes} effects={props.effects}/>)}

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
  getIncomes(){
    const incomeSources = Object.keys(this.props.incomes)
    const incomeAmounts = Object.values(this.props.incomes)
    var outString = ''
    for (var i in incomeSources.length){
      outString += incomeSources[i] + ':' + incomeAmounts[i]
    }
    return outString
  }
  render() {
    var mouseover
    if (this.props.name=='birbs'){
      mouseover = <div />}
    else{ mouseover =
        (<div className='sidebar-item-mouseover'>
          income: {this.getIncomes()} <br/>
          effects:
        </div>) }

    if (this.props.show.includes(this.props.name)){
      return (
        <div className='sidebar-item'>
          {this.props.name}: {this.round(this.props.res)}/{this.round(this.props.max)} <br/>
          {mouseover}
        </div>)
      }
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
