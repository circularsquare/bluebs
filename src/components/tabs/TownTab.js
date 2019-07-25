import React, { Component } from 'react'
var getStuff = require('../../modules/getStuff.js');

class TownTab extends Component{
  constructor(props){
    super(props);}
  render(){
    var birbs = this.props.resources
    var show = this.props.visibleJobs
    var effects = this.props.effects
    var canEmploy = this.props.tech['training'].researched
    if (canEmploy){
      return (
        <div label="home">
          give ur birbs jobs <br/>
          u currently have {birbs.unemployed} free birbs <br/>
          <div className='menu'>
            jobs:
            <JobLine job='foragers' hire={this.props.hire} birbs={birbs} show={show} effects={effects}/>
            <JobLine job='woodpeckers' hire={this.props.hire} birbs={birbs} show={show} effects={effects}/>
            <JobLine job='scholars' hire={this.props.hire} birbs={birbs} show={show} effects={effects}/>
            <JobLine job='diggers' hire={this.props.hire} birbs={birbs} show={show} effects={effects}/>
          </div>
        </div>)}
    else{ return <div> maybe you can train these birbs somehow? </div> }
  }
}

class JobLine extends Component{
  constructor(props){super(props)}
  render(){
    var effectsToDisplay = []
    var income = this.props.effects.income[this.props.job]
    var constant = this.props.effects.constant[this.props.job]
    if(income){effectsToDisplay.push(Object.keys(income).map(target => <div key={target}>{target}: {getStuff.round(income[target])}/s<br/></div>))}
    if(constant){effectsToDisplay.push(Object.keys(constant).map(target => <div key={target}>{target}: {getStuff.round(constant[target])}<br/></div>))}
    if(this.props.show.includes(this.props.job)){
      return (
        <div className = 'menu-item'>
          {this.props.job} ({this.props.birbs[this.props.job]})
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job, 1)}> + </button>
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job,-1)}> - </button> <br/>
          <div className = 'menu-item-mouseover'>
            {effectsToDisplay}</div>
        </div>

      )}
    else{return(<div />)}
  }
}

export default TownTab
