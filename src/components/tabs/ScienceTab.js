import React, { Component } from 'react'
import Tree from 'react-d3-tree';

class ScienceTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var birbs = this.props.birbs
    const techTreeData = {name: 'science', position: [0, 0], children:
      [{name: 'e', position: [0, 100], children: [],}]
    }

    return (
      <div label="science">
        time to learn!
        <div className="tree-wrapper">
          <TechTree data={techTreeData} />
        </div>
      </div>
    )
  }
}

class TechTree extends Component{
  constructor(props){super(props);}

  makeTechs(inputNode){
    var nodeList = []
    for (var child in inputNode.children){
      nodeList = [...nodeList, <Tech name={child.name} position={child.position} />]
    }
    return nodeList
  }

  render(){
    return (
      <div className='tech-tree'>
        {this.makeTechs(this.props.data)}
      </div>
    )
  }
}
class Tech extends Component{
  constructor(props){
    super(props);
    this.state = { name: 'error', position:[20, 20] }
  }
  render(){
    return (
      <button className='tech' style={{top:'0px'}}> {this.props.name} </button>
    )
  }
}


export default ScienceTab
