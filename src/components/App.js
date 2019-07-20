import React from 'react';
import './App.scss';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'

import Tabs from '../containers/tabs/VisibleTabs.js'
import HomeTab from '../containers/tabs/HomeTab.js'
import TownTab from '../containers/tabs/TownTab.js'
import MapTab from '../containers/tabs/MapTab.js'
import ScienceTab from '../containers/tabs/ScienceTab.js'

var getStuff = require('../modules/getStuff.js');


class App extends React.Component {
  constructor(props){
    super(props);
    this.counter = 0
    this.state = {daylength: 0, time: 0}
    this.props.applyEffects('base', 1)
    this.props.sendInfo('there are also a lot of blueb bushes to eat.')
    this.props.sendInfo('you look around and see lots of birbs flying around.')

    this.props.sendInfo('you wake up in a grassy feild...')
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
          [4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 4, 0, 0], ])}

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 100)}
  tick(){
    //in game time change
    if (this.counter%5==0){
      var newTime = new Date().getTime()
      this.setState({dayLength: (newTime - this.state.time), time: newTime})
      this.props.tick()}

    //early game (pre-science) progress tracking
    if (this.props.info.progression<3 & this.counter%50==0){
      if (this.props.info.progression==0){
        if (this.props.buildings['nest'].number>0 & this.props.resources['bluebs']>1){
          this.props.setProgression(1)
          this.props.addTab('town', 'birb tree')
          this.props.addResource('birbs')
          this.props.adoptBirb(1);
          this.props.spawnUnit('borb', 'unemployed', 'unemployed', [3.5, 6.5])
          this.props.sendInfo('a birb lands on your hand! maybe you can be friends? maybe other birbs will come too?')}}
      if (this.props.info.progression==1){
        if (this.props.resources['birbs']>=3){
          this.props.setProgression(2)
          this.props.addResource('knowledge')
          this.props.sendInfo('maybe you can learn how to do more things if u study.')}}
      if (this.props.info.progression==2){
        if (this.props.resources['knowledge']>5){
          this.props.setProgression(3)
          this.props.addTab('science', 'study')}}}
    //borb inflow and outflow
    if (this.counter%20==0 & this.props.info.progression>0){
      if ((Math.random()<.1*(this.props.resources['maxbirbs']-this.props.resources['birbs']))&(this.props.resources['bluebs']>1)){
        this.props.adoptBirb(1);
        this.props.spawnUnit('borb', 'unemployed', 'unemployed', [3.5, 6.5])}
      if ((this.props.resources['bluebs']<1) & (this.props.resources['birbs']>0) & (Math.random()<.5)){
        var hunger = this.props.info.hunger
        if(hunger==0){
          if(this.props.info.progression<1){
            this.props.sendInfo("your borbs are hungery.... feed them or they'll fly away!!")}
          else{
            (this.props.sendInfo("your borbs are hungery... "))}}
        this.props.setHunger(hunger + 1)
        if(hunger>5){
          this.props.sendInfo("a borb flew away")
          this.props.adoptBirb(-1);
          this.props.setHunger(0)}}}
    //unit moving
    if (this.counter%2==0){
      for (const unit in this.props.units){
        this.props.moveUnit(unit, (Math.random()-.5)*.2, (Math.random()-.5)*.2)}}
    //income
    if (this.counter%1==0){
      for (const incomeGenerator of Object.keys(this.props.effects.income)){
        this.props.income(incomeGenerator, getStuff.getNum(incomeGenerator, this.props.buildings, this.props.resources, this.props.tech))}}

    this.counter = (this.counter+1)%1200
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
