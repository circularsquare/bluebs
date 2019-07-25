import React, { Component } from 'react'
var getStuff = require('../modules/getStuff.js');

class Building extends Component{
  constructor(props){super(props)}

  build(n){
    var info = this.props.buildings[this.props.name]
    var enoughResources = true
    var enoughBuildings = info.number+n
    for (var resource in info.cost){
      var cumulativeCost = info.cost[resource]*(1-Math.pow(info.costRatio, n))/(1-info.costRatio)
      if (cumulativeCost>this.props.resources[resource]){
        enoughResources = false
        this.props.sendInfo('no resources :(')}}
    if (enoughResources & enoughBuildings>=0){
      for (resource in info.cost){
        if(n>0){
          this.props.harvest(resource, -info.cost[resource]*(1-Math.pow(info.costRatio, n))/(1-info.costRatio))
          this.props.sendInfo(' u spent ' + info.cost[resource]*n + ' ' + resource + ' on a ' + this.props.name)}
        else{
          this.props.sendInfo('u destroyed a ' + this.props.name)
        }
      }
      if(n>0){
        for(var i = 0; i<n; i++){
          this.props.build(this.props.name, 1)
          this.props.incrementCost(this.props.name, 1)}}
      else{
        for(var i = 0; i>n; i--){
          this.props.build(this.props.name, -1)
          this.props.incrementCost(this.props.name, -1)}}
      this.props.applyEffects(this.props.name, n)
      this.props.applyModifiers(this.props.name, n)
    }
  }


  render(){
    if(!(this.props.visibleBuildings.includes(this.props.name))){return <div/>}
    var info = this.props.buildings[this.props.name]
    return(
      <div className = "menu-item">
        {this.props.name} ({info.number}): <button className='round' onClick={() => this.build(1)}> + </button> <button className='round' onClick={() => this.build(-1)}> - </button>
        <br />
        <div className = "menu-item-mouseover">
          {info.desc} <br />
          cost: <ul>
            {Object.entries(info.cost).map(entry => <li key={entry[0]}> {entry[0]}: {getStuff.round(entry[1])} </li>)} </ul>
        </div>
      </div>
    )
  }
}

export default Building
