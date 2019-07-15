import React from 'react';
import './App.scss';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'

import Tabs from '../containers/tabs/VisibleTabs.js'
import HomeTab from '../containers/tabs/HomeTab.js'
import TownTab from '../containers/tabs/TownTab.js'
import MapTab from '../containers/tabs/MapTab.js'
import ScienceTab from '../containers/tabs/ScienceTab.js'

/*
todo: make buildings actually do something



*/




class App extends React.Component {
  constructor(props){
    super(props);
    this.counter = 0
    this.props.addTab('science', 'science')
    this.props.addTab('map', 'map')
    this.props.addTab('town', 'settlement')
  }

  componentDidMount(){ //runs on first render
    this.timerID = setInterval(() => this.tick(), 100)}

  tick(){
    this.props.harvest('bluebs', this.props.birbs.farmers - this.props.birbs.total*.1)
    this.props.harvest('wood', this.props.birbs.woodpeckers)
    if(this.counter==0){
      this.props.tick()} //this tick changes the in game time
    if ((Math.random()<.002*(this.props.birbs.maxbirbs-this.props.birbs.total))&(this.props.resources.bluebs>1)){
      this.props.adoptBirb(1);
      this.props.addTab('town', 'sattlement')
      this.props.addResource('birbs')
      this.props.sendInfo('adopted borb')}
    this.counter = (this.counter+1)%10
  }

  render(){
    return (
      <div className="App">
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
