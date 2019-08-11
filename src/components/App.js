import React from 'react';
import ReactGA from 'react-ga';
import './App.scss';

import Sidebar from '../containers/Sidebar'
import Infobox from '../containers/Infobox'
import Tabs from '../containers/tabs/VisibleTabs.js'
import HomeTab from '../containers/tabs/HomeTab.js'
import TownTab from '../containers/tabs/TownTab.js'
import MapTab from '../containers/tabs/MapTab.js'
import ScienceTab from '../containers/tabs/ScienceTab.js'

import {initState} from '../initialState.js'
var getStuff = require('../modules/getStuff.js');

class App extends React.Component {
  constructor(props){
    super(props);
    ReactGA.initialize("UA-144895650-1")
    ReactGA.pageview(window.location.pathname)
    this.counter = 1
    this.state = {daylength: 0, time: 0}
    this.props.applyEffects('base', 1)
    this.props.sendInfo('there are also a lot of blueb bushs to eat.')
    this.props.sendInfo('you look around and see lots of birbs flying around.')
    this.props.sendInfo('you wake up in a grassy field...')

    //this.load('startup')
    //readd the load when u release
  }

  unlockEverything(){ //for debugging ez
    this.props.setProgression(3)
    this.props.addTab('town', 'settlement')
    this.props.addTab('science', 'study')
    this.props.addResource('birbs')
    this.props.addResource('knowledge')
    this.props.set('maxknowledge', 50000)
    this.props.harvest('wood', 100)
    this.props.harvest('bluebs', 100)
    this.props.harvest('knowledge', 50000)
    this.props.harvest('stone', 50)
    this.props.harvest('clay', 50)
    this.props.build('nest', 10)
    this.props.applyEffects('nest', 10)}

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
          this.props.sendInfo('a birb lands in ur nest! maybe you can be friends? maybe other birbs will come too?')}}
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
      if ((Math.random()<.1+(.1*(this.props.resources['maxbirbs']-this.props.resources['birbs'])))&(this.props.resources['bluebs']>1)){
        this.props.adoptBirb(1);}
      if ((this.props.resources['bluebs']<1) & (this.props.resources['birbs']>0) & (Math.random()<.5)){
        var hunger = this.props.info.hunger
        if(hunger==0){
          if(this.props.info.progression<1){
            this.props.sendInfo("your borbs are hungery.... feed them or they'll fly away!!")}
          else{
            (this.props.sendInfo("your borbs are hungery... "))}}
        this.props.setHunger(hunger + 1)
        if(hunger>4){
          this.props.sendInfo("a borb flew away :(")
          this.props.adoptBirb(-1);
          if(this.props.resources['woodpeckers']>0){this.props.hire('woodpeckers', -1)}
          else if (this.props.resources['scholars']>0){this.props.hire('scholars', -1)}
          else {this.props.hire('farmers', -1)}
          this.props.setHunger(0)}}}
    //unit moving
    if (this.counter%5==1){ //need to make them all move at once
      for (const unit in this.props.units){
        this.props.unitMove(unit)}}
    //income
    if (this.counter%1==0){
      for (const incomeGenerator of Object.keys(this.props.effects.income)){
        this.props.income(incomeGenerator, getStuff.getNum(incomeGenerator, this.props.buildings, this.props.resources, this.props.tech))}}
      for (const unit of this.props.units){
        console.log(unit)
        if (unit.location!=unit.work){
          this.props.collect(unit.id)
        }
      }
    //if (this.counter%200==0){
    //  this.save('autosave')}
    if (this.counter%200==0 & Math.random()<.01 & this.props.resources['birbs']>2){this.props.sendInfo('a borb c h o r p s')}
    this.counter = (this.counter+1)%1200
  }

  load(whence){
    try{
      const inState = JSON.parse(localStorage.getItem('state'))
      if (inState!= null){
        if(inState['resources']['maxbluebs']!=0){
          this.props.load()
          this.props.sendInfo('loaded!')}}
      else {if(whence=='button'){this.props.sendInfo('no save state found :c')}}}
    catch (err) {if(whence=='button'){this.props.sendInfo('no save state found :/')}}}
  save(whence){
    localStorage.setItem('state', JSON.stringify(this.props.state))
    if(whence=='button'){this.props.sendInfo('saved!') }
    //if(whence=='autosave'){this.props.sendInfo('autosaved!') }
    if(whence=='reset'){
      localStorage.setItem('state', undefined)
      this.props.sendInfo('reset successful! refresh the page to start from nothing (or click save right now if you want to cancel the reset!!)')
      console.log(localStorage.getItem('state'))}}
  render(){
    return (
      <div>
        <Sidebar/>
        <div className='not-sidebar'>
          <div className='header'>
            <h3>{this.state.dayLength}
              <button className='save-button' onClick={() => this.unlockEverything()}> debugmode </button>
              <button className='save-button' onClick={() => this.save('button')}> save </button>
              <button className='save-button' onClick={() => this.load('button')}> load </button>
              <button className='save-button' onClick={() => this.save('reset')}> hard reset </button>
            </h3>
            <h1>blueb game </h1>
          </div>
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
      </div>
    );
  }
}

export default App;
