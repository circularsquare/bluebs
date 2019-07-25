import React, { Component } from 'react'
import Map from '../../containers/Map'

class MapTab extends Component{
  constructor(props){
    super(props);
    this.state = {zoom: 3, pixSize: 12, corner: [0, 0]}}


  spawnUnit(){
    this.props.spawnUnit('borb', 'bluebirb', 'unemployed', [3.5, 6.5])}
  sendUnitInfo(n){
    if (n >= this.props.units.length | n<0){return this.props.sendInfo('unit ' + n + " doesn't exist")}
    const unit = this.props.units[n]
    return this.props.sendInfo(unit.name + ' the ' + unit.species + ' ' + unit.job + ' has id ' + n + ' and location ' + unit.location)}
  zoom(n){
    const zoomDict = {7:2, 6:4, 5:6, 4:8, 3:12, 2:20, 1:28, 0:36}
    if (this.state.zoom+n>=0 & this.state.zoom+n<=7){
      this.setState({zoom: this.state.zoom+n, pixSize: zoomDict[this.state.zoom+n]})}}
  move(x, y){
    this.setState({corner: [this.state.corner[0]+x*20, this.state.corner[1]+y*20]})} //20 is the number of pixels the map shifting shifts by

  displayTileInfo(){  //displays info about selected tile
    const selected = this.props.info.selectedTile
    const tile = this.props.info.tiles[selected]
    if (tile){
      const x = Math.floor(selected/1000000)
      const y = selected-x*1000000
      const infoDiv = <div>
        location: ({x}, {y})
        {Object.keys(tile).map(info => <div> {info}: {tile[info]} <br/> </div>)} </div>
      return infoDiv}
    return ('haha dude this tile is UNGENERATED! this is a real bruh moment...')
  }
  render(){
    return (
      <div>
        <div className='map-wrapper'>
          its a map! <br />
          zoom: <button className = 'round-g' onClick={() => this.zoom(-1)}> + </button>
          <button className = 'round-g' onClick={() => this.zoom(1)}> - </button> <br/>
          shift: <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = 'round-g' onClick={() => this.move(1, 0)}> &uarr; </button> <br/>
          <button className = 'round-g' onClick={() => this.move(0, 1)}> &larr; </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className = 'round-g' onClick={() => this.move(0, -1)}> &rarr; </button> <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = 'round-g' onClick={() => this.move(-1, 0)}> &darr; </button>
          <Map pixSize={this.state.pixSize} corner={this.state.corner} /> <br />
          spawn a borb: <button className='round-g' onClick={() => this.spawnUnit()}> + </button> <br/>
          see info about last borb: <button className='round-g' onClick={() => this.sendUnitInfo(this.props.units.length-1)} /> <br/>
        </div>
        <div className='tech-info'>{this.displayTileInfo()}</div>

      </div>
    )
  }
}

export default MapTab
