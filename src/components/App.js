import React from 'react';
import './App.scss';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'

import Tabs from '../containers/tabs/VisibleTabs.js'
import HomeTab from '../containers/tabs/HomeTab.js'
import TownTab from '../containers/tabs/TownTab.js'
import MapTab from '../containers/tabs/MapTab.js'
import ScienceTab from '../containers/tabs/ScienceTab.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.counter = 0
    this.state = {daylength: 0, time: 0}
    this.props.addTab('science', 'science') //remove all these before release
    this.props.addTab('map', 'map')
    this.props.addTab('town', 'settlement')
    this.props.addResource('birbs')
    this.props.addResource('knowledge')
    this.props.addMap(
         [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 4, 0, 0, 0, 0, 0, 1],
          [3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 4, 4, 0, 0, 0, 0],
          [3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 4, 0, 0, 0, 0],
          [3, 4, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
          [3, 4, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
          [3, 4, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 3, 3, 0, 3, 0, 0, 0, 0],
          [4, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 3, 3, 0, 3, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 3, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0],
          [4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 3, 0, 0],
          [4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0],
          [4, 4, 0, 0, 0, 4, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0],
          [4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 4, 0, 3, 3],
          [4, 4, 4, 0, 4, 4, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 0, 0, 0, 3],
          [4, 4, 0, 0, 0, 0, 4, 0, 0, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 3],
          [4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 4, 0, 0],  ])
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 100)}
  tick(){
    if(this.counter==0){
      var newTime = new Date().getTime()
      this.setState({dayLength: (newTime - this.state.time), time: newTime})
      this.props.tick()} //this tick changes the in game time
    this.props.harvest('bluebs', this.props.birbs.farmers - this.props.birbs.total*.1)
    this.props.harvest('wood', this.props.birbs.woodpeckers)
    if ((Math.random()<.002*(this.props.birbs.maxbirbs-this.props.birbs.total))&(this.props.resources.bluebs>1)){
      this.props.adoptBirb(1);
      this.props.addTab('town', 'sattlement')
      this.props.addResource('birbs')
      this.props.sendInfo('adopted borb')}

    if (this.counter%1==0){
      for (const unit in this.props.units){
        this.props.moveUnit(unit, (Math.random()-.5)*.2, (Math.random()-.5)*.2)}}

    this.counter = (this.counter+1)%10
  }

  render(){
    return (
      <div className="App">
        <h3>{this.state.dayLength}</h3>
        welcome 2 blueb land!
        <Sidebar/>
        <Tabs
          visibleTabs = {this.props.info.visibleTabs}>
          <div label='home'>
            <HomeTab/> </div>
          <div label="town">
            <TownTab/> </div>
          <div label="science">
            <ScienceTab /> </div>
          <div label="map">
            <MapTab /></div>
        </Tabs>
        <Infobox />
      </div>
    );
  }
}

export default App;
