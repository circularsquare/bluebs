import React, { Component } from 'react'

class TownTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var birbs = this.props.birbs
    var show = this.props.visibleJobs
    return (
      <div label="home">
        give ur birbs jobs <br/>
        u currently have {birbs.unemployed} free birbs <br/>
        <div className='menu'>
          <JobLine job='farmers' hire={this.props.hire} birbs={birbs} show={show}/>
          <JobLine job='woodpeckers' hire={this.props.hire} birbs={birbs} show={show}/>
          <JobLine job='scholars' hire={this.props.hire} birbs={birbs} show={show}/>
        </div>
      </div>
    )
  }
}

class JobLine extends Component{
  constructor(props){super(props)}
  render(){
    if(this.props.show.includes(this.props.job)){
      return (
        <div className = 'menu-item'>
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job, 1)}> + </button>
          <button className='round-y' onClick={() =>
            this.props.hire(this.props.job,-1)}> - </button> 
            u currently have {this.props.birbs[this.props.job]} {this.props.job} <br/>
        </div>
      )}
    else{return(<div />)}
  }
}

export default TownTab
