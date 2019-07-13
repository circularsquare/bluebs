import React from 'react';
import './App.css';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'

import Tabs from '../containers/VisibleTabs.js'
import HomeTab from '../containers/HomeTab.js'
import TownTab from '../containers/TownTab.js'
import Map from './Map.js'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){ //runs on first render
    this.timerID = setInterval(
      () => this.tick(),
      100 );}

  tick(){
    this.props.changeBluebs(this.props.birbs.farmers)
    if (Math.random()<.11){
      this.props.adoptBirb(1)
      this.props.sendInfo('adopted borb')
    }
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
            its a map.
            <Map /></div>
        </Tabs>
        <Infobox />
      </div>
    );
  }
}

export default App;
