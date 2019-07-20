import React, { Component } from 'react'

class TownTab extends Component{
  constructor(props){
    super(props);}
  render(){
    var birbs = this.props.resources
    var show = this.props.visibleJobs
    var canEmploy = this.props.tech['training'].researched
    if (canEmploy){
      return (
        <div label="home">
          give ur birbs jobs <br/>
          u currently have {birbs.unemployed} free birbs <br/>
          <div className='menu'>
            jobs:
            <JobLine job='farmers' hire={this.props.hire} birbs={birbs} show={show}/>
            <JobLine job='woodpeckers' hire={this.props.hire} birbs={birbs} show={show}/>
            <JobLine job='scholars' hire={this.props.hire} birbs={birbs} show={show}/>
          </div>
        </div>)}
    else{ return <div> maybe you can train these birbs somehow? </div> }
  }
}

class JobLine extends Component{
  constructor(props){super(props)}
  render(){
    if(this.props.show.includes(this.props.job)){
      return (
        <div className = 'menu-item'>
          {this.props.job} ({this.props.birbs[this.props.job]})
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job, 1)}> + </button>
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job,-1)}> - </button> <br/>
        </div>
      )}
    else{return(<div />)}
  }
}

export default TownTab
