import React, { Component } from 'react'

class Map extends Component{
  constructor(props){
    super(props)
    this.canvasRef = React.createRef();}

  renderBackground(ctx){
    const pixSize = this.props.pixSize
    var lowerXToRender = Math.floor(-this.props.corner[1]/pixSize)-3
    var higherXToRender = Math.floor((-this.props.corner[1]+240)/pixSize)+3
    var lowerYToRender = Math.floor(-this.props.corner[0]/pixSize)-3
    var higherYToRender = Math.floor((-this.props.corner[0]+240)/pixSize)+3
    ctx.fillStyle='#ccc'
    ctx.fillRect(this.props.corner[1]+pixSize*lowerXToRender, this.props.corner[0]+pixSize*lowerYToRender, pixSize*(higherXToRender-lowerXToRender), pixSize*(higherYToRender-lowerYToRender))
    var tiles = this.props.tiles
    for (var x = lowerXToRender; x < higherXToRender; x++){
      for (var y = lowerYToRender; y < higherYToRender; y++){
        const location = x*1000000+y
        if (!Object.keys(tiles).includes(location.toString())){
          this.generateTile(location)
        }
      }
    }
    for (var x = lowerXToRender; x < higherXToRender; x++){
      for (var y = lowerYToRender; y < higherYToRender; y++){
        const location = x*1000000+y
        var tile = tiles[location]
        if(tile){
          ctx.fillStyle = tile.color
          ctx.fillRect(pixSize*x+this.props.corner[1], pixSize*y+this.props.corner[0], pixSize, pixSize)}}}
  }
  handleClick(pos){
    const pixSize = this.props.pixSize
    const x = Math.floor((pos.x - this.props.corner[1]) / pixSize)
    const y = Math.floor((pos.y - this.props.corner[0]) / pixSize)
    //add a unit selection thing here
    this.props.selectTile(x*1000000+y)}
  generateTile(pos){
    const x = Math.round(pos/1000000)
    const y = pos-x*1000000
    var type = 'unknown'
    if(y>0 & y<this.props.info.tileTypes.length & x>0 & x<this.props.info.tileTypes[0].length){
      const typeDict = {0: 'field', 1: 'water', 2:'hi', 3: 'aa', 4: 'j'}
      type = typeDict[this.props.info.tileTypes[y][x]]
    }
    this.props.makeTile(pos, {color: '#bbb', type: type})}
  renderUnits(ctx){
    ctx.fillStyle= '#42b3f5';
    const pixSize = this.props.pixSize
    for (var unit in this.props.units){
      var unit = this.props.units[unit]
      ctx.beginPath();
      ctx.arc(pixSize*unit.location[0]+this.props.corner[1], pixSize*unit.location[1]+this.props.corner[0], pixSize/5, 0, 6.28);
      ctx.lineWidth=pixSize/10;
      ctx.stroke()
      ctx.fill()
    }
  }
  componentDidMount(){
    const canvas = this.canvasRef.current;
    canvas.addEventListener('click', (e) => {
      var rect = e.target.getBoundingClientRect()
      const pos = {x:e.clientX-rect.left, y:e.clientY-rect.top}
      this.handleClick(pos)})
    var ctx = canvas.getContext('2d');
    this.renderBackground(ctx);
    this.renderUnits(ctx);}
  componentDidUpdate(){
    const canvas = this.canvasRef.current;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); //get rid of this later so u dont have to redraw everything
    this.renderBackground(ctx);
    this.renderUnits(ctx);
  }

  render(){
    return(
      <div className='map'>
        <canvas ref={this.canvasRef} width="240" height="240"/>
      </div>
    )
  }
}

export default Map
