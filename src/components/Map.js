import React, { Component } from 'react'
import { Stage, Layer, Rect, Text , Circle} from 'react-konva'
import Konva from 'konva'

class Map extends Component{
  constructor(props){
    super(props)
    this.canvasRef = React.createRef();}
  componentDidMount(){}
  componentDidUpdate(){}
  shouldComponentUpdate(nextProps, nextState){
    return (
      (nextProps.time[2] != this.props.time[2]) |
      (nextProps.corner != this.props.corner) |
      (nextProps.pixSize != this.props.pixSize)
    )
  }

  render(){
    console.log('rendered')
    return(
      <div className='map'>
        <Stage width={240} height={240}>
          <Tiles tiles={this.props.tiles} pixSize={this.props.pixSize} corner={this.props.corner} makeTile={this.props.makeTile} tileTypes={this.props.tileTypes} selectTile={this.props.selectTile}/>
          <Layer>
            {this.props.units.map(unit =>
              <Unit unit={unit} tiles={this.props.tiles} pixSize={this.props.pixSize} corner={this.props.corner}/>)}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Map


class Unit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      color: "#55f",
      borderColor: "#22b",
    }}
  componentDidMount(){}

  render(){
    if (this.props.unit.display){
      return (
        <Circle
          x={((this.props.unit.coords[0]+.5)*this.props.pixSize)+this.props.corner[0]}
          y={((this.props.unit.coords[1]+.5)*this.props.pixSize)+this.props.corner[1]}
          radius={this.props.pixSize*.1}
          fill={this.state.color}
          ref = {node => {this.circle = node;}}
          stroke = {this.state.borderColor}
          strokeWidth = {this.props.pixSize*.02}
        />
      )
    }
    return null
  }
}

class Tiles extends React.Component{
  constructor(props){
    super(props)
    this.renderBackground()
    this.state = {firstDrawn: false}}
  shouldComponentUpdate(nextProps, nextState){
    return (
      (nextProps.pixSize != this.props.pixSize) |
      (nextProps.corner != this.props.corner) |
      !(this.state.firstDrawn))}
  componentDidUpdate(){
    this.setState({firstDrawn: true})
    this.renderBackground()}
  renderBackground(){
    const pixSize = this.props.pixSize
    const lowerXToRender = Math.floor(-this.props.corner[0]/pixSize)-3
    const higherXToRender = Math.floor((-this.props.corner[0]+240)/pixSize)+3
    const lowerYToRender = Math.floor(-this.props.corner[1]/pixSize)-3
    const higherYToRender = Math.floor((-this.props.corner[1]+240)/pixSize)+3
    var tiles = this.props.tiles
    for (var x = lowerXToRender; x < higherXToRender; x++){
      for (var y = lowerYToRender; y < higherYToRender; y++){
        const location = x*1000000+y
        if (!Object.keys(tiles).includes(location.toString())){
          this.generateTile(location)}}}}
  generateTile(pos){
    const x = Math.round(pos/1000000)
    const y = pos-x*1000000
    var type = 'unknown'
    var color = [150, 150, 150]
    var typeNum
    if(y>=0 & y<this.props.tileTypes.length & x>=0 & x<this.props.tileTypes[0].length){
      typeNum = this.props.tileTypes[y][x].toString()}
    else{
      typeNum = 0
      if (Math.random()<.15){typeNum=3}
      if (Math.random()<.075){typeNum=4}}
    const typeDict = ['field', 'water', 'town', 'mountain', 'forest']
    const colorDict = [[108, 243, 86], [80, 178, 251], [10, 10, 10], [132, 134, 135], [20, 156, 43], ]
    const capacityDict = [
      {'bluebCapacity':100, 'woodCapacity':20},
      {'fishCapacity':100 },
      {},
      {'stoneCapacity':100 },
      {'woodCapacity':100},
    ]
    const possibleJobsDict = [
      ['foragers'],
      ['fishers'],
      [],
      ['diggers'],
      ['woodpeckers'],]
    const possibleJobs = possibleJobsDict[typeNum].push('carriers')
    if (typeDict[typeNum]){
      type = typeDict[typeNum]}
    if (colorDict[typeNum]){
      color = colorDict[typeNum]
      color[0] += (Math.random()-.5)*12
      color[1] += (Math.random()-.5)*12
      color[2] += (Math.random()-.5)*12}
    const capacities = capacityDict[typeNum]
    this.props.makeTile(pos, {color: 'rgb('+color[0]+','+color[1]+','+color[2]+')', type: type, capacities: capacities, possibleJobs: possibleJobs, buildings: {}})}
  handleClick(e){
    const pixSize = this.props.pixSize
    const x = Math.round((e.target.attrs.x - this.props.corner[0]) / pixSize)
    const y = Math.round((e.target.attrs.y - this.props.corner[1]) / pixSize)
    console.log(x)
    console.log(e)
    this.props.selectTile(x*1000000+y)}
  render(){
    return (
      <Layer onClick={this.handleClick.bind(this)} >
        {Object.keys(this.props.tiles).map(location =>
          <Tile key={location} location={location} tile={this.props.tiles[location]} pixSize={this.props.pixSize} corner={this.props.corner}/>)}
      </Layer>
    )
  }
}
class Tile extends React.Component{
  constructor(props){
    super(props) }
  render(){
    const pos = this.props.location
    const x = Math.round(pos/1000000)
    const y = pos-x*1000000
    return(
      <Rect
        x = {x*this.props.pixSize+this.props.corner[0]}
        y = {y*this.props.pixSize+this.props.corner[1]}
        fill = {this.props.tile.color}
        width = {this.props.pixSize}
        height = {this.props.pixSize}
        ref = {node => {this.rect = node;}}
      />
    )
  }
}
