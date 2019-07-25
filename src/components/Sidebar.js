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
    for (var generator of Object.keys(effects.income)){
      if (target in effects.income[generator]){
        const overallEffect = effects.income[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if (overallEffect){
          out[0][generator] = overallEffect}}}
    for (var generator of Object.keys(effects.constant)){
      if (target in effects.constant[generator]){
        const overallEffect = effects.constant[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[1][generator] = overallEffect}}
      if (maxTarget in effects.constant[generator]){
        const overallEffect = effects.constant[generator][maxTarget]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[2][generator] = overallEffect}}}
    for (var generator of Object.keys(effects.modifiers)){
      if (target in Object.keys(effects.modifiers[generator])){
        const overallEffect = effects.modifers[generator][target]*getStuff.getNum(generator, this.props.buildings, this.props.resources, this.props.tech)
        if(overallEffect){
          out[3][generator] = overallEffect}}}
    var incomeDetails = Object.keys(out[0]).map(generator => <div key={generator} className='effect-detail'> &nbsp; {generator}: {this.round(10*out[0][generator])}/s <br/> </div>)
    var effectsDetails = Object.keys(out[1]).map(generator => <div key={generator} className='effect-detail'> &nbsp; {generator}: {this.round(out[1][generator])} <br/> </div>)
    var maxDetails = Object.keys(out[2]).map(generator => <div key={generator} className='effect-detail'> &nbsp; {generator}: {this.round(out[2][generator])} <br/> </div>)
    var modifiersDetails = Object.keys(out[3]).map(generator => <div key={generator} className='effect-detail'> &nbsp; {generator}: {out[3][generator]} <br/> </div>)
    if (Object.keys(out[0]).length>0){
      var totalIncome = 'income: ' + this.round(10*(Object.values(out[0]).reduce((a, b) => a+b, 0))) + '/s'
      var incomeOut = <div>
        {totalIncome}
        {incomeDetails}
      </div>}
    if (Object.keys(out[1]).length>0){
      var totalEffects = 'effects: ' + this.round(Object.values(out[1]).reduce((a, b) => a+b, 0))
      var effectsOut = <div>
        {totalEffects}
        {effectsDetails}
      </div>}
    if (Object.keys(out[2]).length>0){
      var totalMax = 'cap: ' + this.round(resources[maxTarget])
      var maxOut = <div>
        {totalMax}
        {maxDetails}
      </div>}
    if (Object.keys(out[3]).length>0){

      }
    return (
      <div>
        {incomeOut}
        {effectsOut}
        {maxOut}
      </div>
    )
  }

  render(){
    const show = this.props.visibleResources
    const res = this.props.resources
    const resourceList = [ //this is for ordering in the sidebar, mostly
      'birbs', 'bluebs', 'wood', 'clay', 'stone', 'knowledge', 'ceramic', 'boxes', 'drawings', 'books', 'happiness']
    var seasonalBar = "sidebar-" + this.props.time[0]
    return (
      <div className='sidebar-wrapper'>
      <div className={seasonalBar}>
        {this.props.time[0]} day {this.props.time[1]} <br />
        ~~~~~~~~~~~~~~~~~~
        {resourceList.map(name =>
          <ResourceLine key={name} name={name} res={res} show={show} getEffects={() => this.getEffects(name, this.props.effects, res)} /> )}
      </div>
      </div>)}}
function ResourceLine(props) {
  return (<Resource name={props.name} res={props.res[props.name]} max={props.res['max'+props.name]} show={props.show} getEffects={props.getEffects}/>)}

class Resource extends Component{
  constructor(props){super(props);}
  round(n){
    if (n>=1000000){
      return (parseFloat((n/1000000.).toFixed(2))+'m')}
    if (n>=1000){
      return (parseFloat((n/1000.).toFixed(2))+'k')}
    if (n>=100){
      return Math.round(n)}
    if (Math.abs(n - Math.round(n)) < .001){
      return Math.round(n)}
    if (n>=10){
      return n.toFixed(1)}
    return n.toFixed(2)}

  colorDict(name){
    const resourceColors= {
      'birbs': '#953',
      'bluebs': '#33a',
      'wood': '#853',
      'knowledge': '#919',
      'clay': '#b51',
      'stone': '#888',
      'happiness': '#bb1',
      'ceramic': '#aac'}
    return resourceColors[name]}

  render() {
    var mouseover =
      (<div className='sidebar-item-mouseover'>
        {this.props.getEffects()}
      </div>)
    var color = {color: this.colorDict(this.props.name)}
    if (this.props.show.includes(this.props.name)){
      if(this.props.max){
        return (
          <div className='sidebar-item'>
            <span style={color}>{this.props.name}</span>: {this.round(this.props.res)}/{this.round(this.props.max)} <br/>
            {mouseover}
          </div>)}
      else{
        return (
          <div className='sidebar-item'>
            <span style={color}>{this.props.name}</span>: {this.round(this.props.res)} <br/>
            {mouseover}
          </div>)}}
    else{return(<div />)}
  }
}

export default Sidebar
