import React, { Component } from 'react'

class Building extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){ //runs on first render
  }

  render(){
    var info = this.props.buildingList[this.props.name]
    return(
      <div className = "building">
        {this.props.j}
        you have {info.number} {this.props.name}: <button onClick={() => this.props.build(this.props.name, 1)}> + </button>
        <br />
         &nbsp; {info.desc} <br />
      </div>
    )
  }
}

export default Building
