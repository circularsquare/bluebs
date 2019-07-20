import React, { Component } from 'react'

var getStuff = require('../modules/getStuff.js');

class Sidebar extends Component{
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

  getEffects(target, effects, resources){
    var out = [{}, {}, {}, {}] //[0]:incomes, [1]:perm effects [2]: max effects [3]:modifiers
    const maxTarget = 'max'+target
    for (const generator of Object.keys(effects.income)){
      if (target in effects.income[generator]){
        const overallEffect = effects.income[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if (overallEffect){
          out[0][generator] = overallEffect}}}
    for (const generator of Object.keys(effects.constant)){
      if (target in effects.constant[generator]){
        const overallEffect = effects.constant[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[1][generator] = overallEffect}}
      if (maxTarget in effects.constant[generator]){
        const overallEffect = effects.constant[generator][maxTarget]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[2][generator] = overallEffect}}}
    for (const generator of Object.keys(effects.modifiers)){
      if (target in effects.modifiers[generator]){
        const overallEffect = effects.modifers[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[3][generator] = overallEffect}}}
    var incomeDetails = Object.keys(out[0]).map(generator => <div className='effect-detail'> &nbsp; {generator}: {this.round(10*out[0][generator])}/s <br/> </div>)
    var effectsDetails = Object.keys(out[1]).map(generator => <div className='effect-detail'> &nbsp; {generator}: {out[1][generator]} <br/> </div>)
    var maxDetails = Object.keys(out[2]).map(generator => <div className='effect-detail'> &nbsp; {generator}: {out[2][generator]} <br/> </div>)
    var modifiersDetails = Object.keys(out[3]).map(generator => <div className='effect-detail'> &nbsp; {generator}: {out[3][generator]} <br/> </div>)
    if (Object.keys(out[0]).length>0){
      var totalIncome = 'income: ' + this.round(10*(Object.values(out[0]).reduce((a, b) => a+b, 0))) + '/s'
      var incomeOut = <div>
        {totalIncome}
        {incomeDetails}
      </div>}
    if (Object.keys(out[1]).length>0){
      }
    if (Object.keys(out[2]).length>0){
      var totalMax = 'cap: ' + resources[maxTarget]
      var maxOut = <div>
        {totalMax}
        {maxDetails}
      </div>}
    if (Object.keys(out[3]).length>0){
      }
    return (
      <div>
        {incomeOut}
        {maxOut}
      </div>
    )


  }

  render(){
    const show = this.props.visibleResources
    const res = this.props.resources
    const resourceList = ['birbs', 'bluebs', 'wood', 'knowledge']

    var seasonalBar = "sidebar-" + this.props.time[0]
    return (
      <div className={seasonalBar}>
        {this.props.time[0]} day {this.props.time[1]} <br />
        ~~~~~~~~~~~~~~~~~~
        {resourceList.map(name =>
          <ResourceLine name={name} res={res} show={show} getEffects={() => this.getEffects(name, this.props.effects, res)} /> )}
      </div>
    )
  }
}
function ResourceLine(props) {
  return (<Resource name={props.name} res={props.res[props.name]} max={props.res['max'+props.name]} show={props.show} getEffects={props.getEffects}/>)}

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
    var mouseover =
      (<div className='sidebar-item-mouseover'>
        {this.props.getEffects()}
      </div>)

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

export default Sidebar
