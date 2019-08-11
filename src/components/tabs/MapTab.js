import React, { Component } from 'react'
import Map from '../../containers/Map'

class MapTab extends Component{
  constructor(props){
    super(props);}

  spawnUnit(){
    var newUnit = {home: [3, 6]}
    this.props.spawnUnit(newUnit)}
  sendUnitInfo(n){
    if (n >= this.props.units.length | n<0){return this.props.sendInfo('unit ' + n + " doesn't exist")}
    const unit = this.props.units[n]
    return this.props.sendInfo(unit.name + ' the ' + unit.job + ' has id ' + n + ' and location ' + unit.coords + ' and is carrying ' + JSON.stringify(unit.inventory))}
  zoom(n){
    const zoomLevels = [2, 4, 6, 8, 12, 20, 28, 36]
    const zoomLevel = zoomLevels.indexOf(this.props.info.pixSize)
    if (zoomLevel+n>=3 & zoomLevel+n<=7){
      this.props.setPixSize(zoomLevels[zoomLevel+n])}}
  move(x, y){this.props.moveCorner([20*x, 20*y])} //10 is the number of pixels the map shifting shifts by

  displayTileInfo(){  //displays info about selected tile
    const selected = this.props.info.selectedTile
    const tile = this.props.tiles[selected]
    if (tile){
      const x = Math.floor(selected/1000000)
      const y = selected-x*1000000
      var capacitiesToDisplay=''
      if(tile['capacities']){
        capacitiesToDisplay = Object.keys(tile['capacities']).map(capacity => (<div> {capacity}: {tile['capacities'][capacity]} <br /> </div>))}
      const infoDiv = (<div>
        location: ({x}, {y}) <br/>
        type: {tile['type']} <br/>
        {capacitiesToDisplay}
        {this.displayTileActions(tile, x, y)}
        </div>)
      return infoDiv}
    return ('haha dude this tile is UNGENERATED! this is an error')}
  displayTileActions(tile, x, y){
    return(
      <div className='menu'>
        <div className='menu-item'> dispatch a travelling borb here (need to have spawned a birb)
          <button className= 'round-g' onClick={() => this.props.setUnitDest(0, x, y)} />
        </div>
      </div>
    )
  }


  render(){
    return (
      <div>
        <div className='map-wrapper'>
          its a map! <br />
          zoom: <button className = 'round-g' onClick={() => this.zoom(1)}> + </button>
          <button className = 'round-g' onClick={() => this.zoom(-1)}> - </button> <br/>
          shift: <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = 'round-g' onClick={() => this.move(0, 1)}> &uarr; </button> <br/>
          <button className = 'round-g' onClick={() => this.move(1, 0)}> &larr; </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className = 'round-g' onClick={() => this.move(-1, 0)}> &rarr; </button> <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = 'round-g' onClick={() => this.move(0, -1)}> &darr; </button>
          <Map pixSize={this.props.info.pixSize} corner={this.props.info.corner} /> <br />
          spawn a borb: <button className='round-g' onClick={() => this.spawnUnit()}> + </button> <br/>
          see info about last borb: <button className='round-g' onClick={() => this.sendUnitInfo(this.props.units.length-1)} /> <br/>
        </div>
        <div className='map-info'>{this.displayTileInfo()}</div>
      </div>
    )
  }
}

export default MapTab
