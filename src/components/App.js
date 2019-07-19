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
    this.linkIncomes()
    this.linkEffects()
    this.props.addTab('science', 'science') //remove all these before release
    this.props.addTab('map', 'map')
    this.props.addTab('town', 'settlement')
    this.props.addResource('birbs')
    this.props.addResource('knowledge')
    this.props.addBuilding('shed')
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
    if(this.counter%5==0){
      var newTime = new Date().getTime()
      this.setState({dayLength: (newTime - this.state.time), time: newTime})
      this.props.tick()} //this tick changes the in game time

    this.linkIncomes()
    this.linkEffects()
    this.applyIncomes()

    if ((Math.random()<.002*(this.props.birbs['maxbirbs']-this.props.birbs['total']))&(this.props.resources['bluebs'].number>1)){
      this.props.adoptBirb(1);
      this.props.addTab('town', 'sattlement')
      this.props.addResource('birbs')
      this.props.sendInfo('adopted borb')}

    if (this.counter%1==0){
      for (const unit in this.props.units){
        this.props.moveUnit(unit, (Math.random()-.5)*.2, (Math.random()-.5)*.2)}}

    this.counter = (this.counter+1)%10
  }

  getValue(target, checkBirbs=true, checkBuildings=true, checkResources=true, checkTechs=true,){ //gets the object of a name (ex: gets the number of 'woodpeckers', or the building object of 'birbhouse')
    if (checkBirbs){
      for (const name of Object.keys(this.props.birbs)){
        if (name==target){
          return [this.props.birbs[name], 'birb']}}}
    if (checkBuildings){
      for (const name of Object.keys(this.props.buildings)){
        if (name==target){
          return [this.props.buildings[name], 'building']}}}
    if (checkResources){
      for (const name of Object.keys(this.props.resources)){
        if (name==target){
          return [this.props.resources[name], 'resource']}}}
    if (checkTechs){
      for (const name of Object.keys(this.props.tech)){
        if (name==target){
          return [this.props.tech[name], 'tech']}}}
    return false}
  getNum(target, checkBirbs=true, checkBuildings=true, checkResources=true, checkTechs=false,){
    var value = this.getValue(target, checkBirbs, checkBuildings, checkResources, checkTechs)
    if (value[1]=='birb'){return value[0]}
    if (value[1]=='tech'){if (value[0].researched){return 1}else{return 0}}
    return(value[0].number)
  }
  linkIncomes(){
    const allIncomes = this.props.effects.income
    for (const generator of Object.keys(allIncomes)){
      var numGenerators=this.getNum(generator)
      if (numGenerators){
        for (const target of Object.keys(allIncomes[generator])){
          this.props.linkIncome(generator, target, numGenerators*allIncomes[generator][target])}}}}
  linkEffects(){
    const allEffects = this.props.effects.constant
    for (const generator of Object.keys(allEffects)){
      var numGenerators=this.getNum(generator)
      if (numGenerators){
        for (const target of Object.keys(allEffects[generator])){
          if(target != 'maxbirbs'){
            this.props.linkEffect(generator, target, numGenerators*allEffects[generator][target])}}}}}
  applyIncomes(){
    for (const resource of Object.keys(this.props.resources)){
      for (const income of Object.values(this.props.resources[resource].incomes)){
        this.props.harvest(resource, income)}}}

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
