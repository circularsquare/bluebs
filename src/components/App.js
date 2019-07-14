import React from 'react';
import './App.css';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'

import Tabs from '../containers/tabs/VisibleTabs.js'
import HomeTab from '../containers/tabs/HomeTab.js'
import TownTab from '../containers/tabs/TownTab.js'
import MapTab from '../containers/tabs/MapTab.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.counter = 0
  }

  componentDidMount(){ //runs on first render
    this.timerID = setInterval(
      () => this.tick(),
      100 );}

  tick(){
    this.props.changeBluebs(this.props.birbs.farmers)
    this.props.changeBluebs(- this.props.birbs.total*.1)
    if(this.counter==0){
      this.props.tick()} //this tick changes the in game time
    if ((Math.random()<.002*(this.props.birbs.maxbirbs-this.props.birbs.total))&(this.props.resources.bluebs>20)){
      this.props.adoptBirb(1);
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
          <div label="map">
            <MapTab /></div>
        </Tabs>
        <Infobox />
      </div>
    );
  }
}

export default App;
