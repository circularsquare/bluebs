import ScienceTab from '../containers/tabs/ScienceTab'
import React, {Component} from 'react'

class Tech extends Component{
  constructor(props){
    super(props);}

  getPath(parentCoords, coords){
    const vertDist = coords[1]-parentCoords[1]-20 //subtract 20 to make room for the curvy parts
    const horizDist = parentCoords[0]-coords[0]
    var path = 'm'+(coords[0]+45)+','+(coords[1]+18) + 'v' + -vertDist/2
    if (horizDist>=20){
      path += ' a 10 10 0 0 1 10 -10'
      path += 'h'+ (horizDist-25)
      path += ' a 10 10 0 0 0 10 -10' }
    else if (horizDist<=-20){
      path += ' a 10 10 0 0 0 -10 -10'
      path += 'h'+ (horizDist+25)
      path += ' a 10 10 0 0 1 -10 -10' }
    else{
      path += ' l ' + (horizDist) + ' ' + -20
    }
    path += 'v' + -vertDist/2
    return path
  }
  selectTech(name){
    this.props.selectTech(name)}
  research(){
    this.props.research(this.props.info.selectedTech)
  }
  render(){
    const name = this.props.name
    const tech = this.props.techList[name]
    if(!name){return(<div> got a null tech </div>)}
    var paths = []
    var display = true
    console.log(tech)
    for (var parentName of tech.parents){
      const parent = this.props.techList[parentName]
      paths.push(this.getPath(parent.position, tech.position))
      if (!parent.researched){
        display = false}}
    var buttonToRender = ''
    if (display){
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
        <div className='lines'><svg>
          {paths.map(path => <path d={path} /> )}
        </svg></div>
        <div className='tech-wrapper' style={coordsHtml}> {buttonToRender} </div>
      </div>
    )
  }
}

export default Tech
