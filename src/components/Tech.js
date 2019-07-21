import ScienceTab from '../containers/tabs/ScienceTab'
import React, {Component} from 'react'

class Tech extends Component{
  constructor(props){
    super(props);}

  getPath(parentCoords, coords){
    const vertDist = coords[1]-parentCoords[1]-14 //subtract 14 to make room for the curvy parts
    const horizDist = parentCoords[0]-coords[0]
    var path

      path = 'm'+(coords[0]+45)+' '+ (coords[1]+18) + 'v -7 '
      path += 'c 0 0 ' + 0 + ' ' + -vertDist/2 + ' ' + horizDist/2 + ' ' + -vertDist/2
      path += 'c 0 0 ' + horizDist/2 + ' ' + 0 + ' ' + horizDist/2 + ' ' + -vertDist/2
      path += 'v -7'
    //}//path += 'A 7 7 0 0 0 ' + (coords[0]+parentCoords[0]/2) + ' ' + (coords[1]+parentCoords[1]/2)}
    /*if (horizDist>=25){ //this was the stuff for curves....
      path = 'm'+(coords[0]+50)+' '+(coords[1]+18) + 'v' + -vertDist/2
      path += ' a 7 7 0 0 1 7 -7'
      path += 'h'+ (horizDist-25)
      path += ' a 7 7 0 0 0 7 -7'
      path += 'v' + -vertDist/2}
    else if (horizDist<=-25){
      path = 'm'+(coords[0]+40)+' '+(coords[1]+18) + 'v' + -vertDist/2
      path += ' a 7 7 0 0 0 -7 -7'
      path += 'h'+ (horizDist+25)
      path += ' a 7 7 0 0 1 -7 -7'
      path += 'v' + -vertDist/2}
    else{'''*/
    return path
  }
  selectTech(name){
    this.props.selectTech(name)}

  render(){
    const name = this.props.name
    const tech = this.props.techList[name]
    if(!name){return(<div> got a null tech </div>)}
    var paths = []
    var display = false
    if (tech.parents.length==0){display=true}
    for (var parentName of tech.parents){
      const parent = this.props.techList[parentName]
      if (!parent){
        console.log('unknown parent' + parentName)}
      paths.push(this.getPath(parent.position, tech.position))
      if (parent.researched){
        display = true}}
    var buttonToRender = ''
    if (display | tech.researched){
      if (tech.researched){
        buttonToRender=<button className='tech-researched' onClick={() => this.selectTech(name)}> {name} </button>}
      else{
        buttonToRender=<button className='tech' onClick={() => this.selectTech(name)}> {name} </button>}}
    else{
      buttonToRender=<div />
      paths=[]}

    const coordsHtml = {left: tech.position[0], top: tech.position[1]}
    return(
      <div>
        <div className='lines'><svg height='1000px'>
          {paths.map(path => <path d={path} className='line'/> )}

        </svg></div>
        <div className='tech-wrapper' style={coordsHtml}> {buttonToRender} </div>
      </div>
    )
  }
}

export default Tech
