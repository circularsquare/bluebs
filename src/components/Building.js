import React, { Component } from 'react'

class Building extends Component{
  constructor(props){super(props)}

  build(n){
    var info = this.props.buildings[this.props.name]
    var enoughResources = true
    for (var resource in info.cost){
      if (info.cost[resource]*n>this.props.resources[resource].number){
        enoughResources = false
        this.props.sendInfo('no resources :(')}}
    if (enoughResources){
      for (resource in info.cost){
        this.props.harvest(resource, -info.cost[resource]*n)
        this.props.sendInfo(' u spent ' + info.cost[resource]*n + ' ' + resource + ' on a ' + this.props.name)
      }
      this.props.build(this.props.name, n)
      for (const name of Object.keys(this.props.effects.constant)){
        if (name==this.props.name){
          for (const target of Object.keys(this.props.effects.constant[name])){
            console.log(target)
            console.log(name)
            if(target=='maxbirbs'){this.props.addMaxBirbs(this.props.effects.constant[name][target])}
            else{this.props.harvest(target, this.props.effects.constant[name][target])}
          }
        }
      }


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
            {Object.entries(info.cost).map(entry => <li> {entry[0]}: {entry[1]} </li>)} </ul>
        </div>
      </div>
    )
  }
}

export default Building
