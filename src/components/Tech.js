import React, {Component} from 'react'

class Tech extends Component{
  constructor(props){super(props);}

  getPath(parentCoords, coords){
    const vertDist = coords[1]-parentCoords[1]-14 //subtract 14 to make room for the curvy parts
    const horizDist = parentCoords[0]-coords[0]
    var path
      path = 'm'+(coords[0]+45)+' '+ (coords[1]+18) + 'v -7 '
      path += 'c 0 0 ' + 0 + ' ' + -vertDist/2 + ' ' + horizDist/2 + ' ' + -vertDist/2
      path += 'c 0 0 ' + horizDist/2 + ' ' + 0 + ' ' + horizDist/2 + ' ' + -vertDist/2
      path += 'v -7'
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
      var showPath = false
      for (var grandparentName of parent.parents){
        if (this.props.techList[grandparentName].researched){showPath=true}}
      if (parent.researched){
        display = true
        showPath = true}
      if (showPath)
        {paths.push(this.getPath(parent.position, tech.position))}}
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
        <div className='lines'><svg height='600px' width='600px'>
          {paths.map(path => <path key={path} d={path} className='line'/> )}

        </svg></div>
        <div className='tech-wrapper' style={coordsHtml}> {buttonToRender} </div>
      </div>
    )
  }
}

export default Tech
