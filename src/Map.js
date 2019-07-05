import React, { Component } from 'react'

class Map extends Component{
  constructor(props){
    super(props)
    this.state={map :
     [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0],
      [3, 3, 0, 1, 1, 1, 1, 1, 0, 0],
      [3, 3, 0, 0, 1, 1, 1, 1, 0, 0],
      [3, 4, 0, 0, 1, 1, 1, 1, 0, 0],
      [3, 4, 4, 0, 0, 1, 1, 1, 1, 0],
      [3, 4, 4, 0, 0, 0, 1, 1, 1, 1],
      [4, 4, 0, 2, 0, 0, 1, 1, 1, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]],
    }
  }

  componentDidMount(){
    const canvas = this.refs.canvas
    var ctx = canvas.getContext('2d');
    const pixSize = 12;
    const map = this.state.map
    for (var col = 0; col < map.length; col++) {
      for (var row = 0; row < map[0].length; row++) {
        if (map[col][row] == 0) {
          ctx.fillStyle = '#85ff3f';
        } //plain
        else if (map[col][row] == 1) {
            ctx.fillStyle = '#54afff';
          } //ocean
          else if (map[col][row] == 2) {
              ctx.fillStyle = '#d64017';
            } //city
            else if (map[col][row] == 3) {
                ctx.fillStyle = '#959699';
              } //mountain
              else if (map[col][row] == 4) {
                  ctx.fillStyle = '#1cb525';
                } //forest

        ctx.fillRect(pixSize * row, pixSize * col, pixSize, pixSize);
      }
    }
  }

  render(){
    return(
      <div>
        <canvas ref="canvas" />
      </div>
    )
  }
}

export default Map
