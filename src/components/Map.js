import React, { Component } from 'react'

class Map extends Component{
  constructor(props){
    super(props)
    this.canvasRef = React.createRef();}

  setupCanvas(canvas){
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
  }
  renderBackground(ctx, pixSize){
    var map = this.props.map
    map = map[0].map((col, i) => map.map(row => row[i])); //transposes the map cuz im dumb
    ctx.fillStyle= '#ddd'
    ctx.fillRect(-1000, -1000, 2000, 2000);
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[0].length; col++) {
        switch (map[row][col]){
          case 0:
            ctx.fillStyle = '#85ff3f'; break;
          case 1:
            ctx.fillStyle = '#54afff'; break;
          case 2:
            ctx.fillStyle = '#d64017'; break;
          case 3:
            ctx.fillStyle = '#959699'; break;
          case 4:
            ctx.fillStyle = '#1cb525'; break;
          default:
            ctx.fillStyle = '#fff'; break;}
        ctx.fillRect(pixSize*row+this.props.corner[1], pixSize*col+this.props.corner[0], pixSize, pixSize);
  }}}
  renderUnits(ctx, pixSize){
    ctx.fillStyle= '#42b3f5';
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
    var ctx = canvas.getContext('2d');
    const pixSize = this.props.pixSize;
    this.renderBackground(ctx, pixSize);
    this.renderUnits(ctx, pixSize);}
  componentDidUpdate(){
    const canvas = this.canvasRef.current;
    var ctx = canvas.getContext('2d');
    const pixSize = this.props.pixSize;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //get rid of this later so u dont have to redraw everything
    this.renderBackground(ctx, pixSize);
    this.renderUnits(ctx, pixSize);
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
