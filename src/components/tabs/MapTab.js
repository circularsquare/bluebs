import React, { Component } from 'react'
import Map from '../Map'

class MapTab extends Component{
  constructor(props){
    super(props);
    this.props.addMap(
         [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0],
          [3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0],
          [3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [3, 4, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [3, 4, 4, 0, 0, 1, 1, 1, 1, 0, 0],
          [3, 4, 4, 0, 0, 0, 1, 1, 1, 1, 0],
          [4, 4, 0, 2, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]]
    )
  }
  render(){
    return (
      <div>
        its a map!
        <Map map={this.props.map}/>
      </div>
    )
  }
}

export default MapTab
