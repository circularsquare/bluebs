import React from 'react';
import './App.css';
import TabsContent from './TabsContent'
import Sidebar from './Sidebar'
import Infobox from './Infobox'
import Map from './Map.js'

/*
redux planning:
  presentational components:
    tabs
    infobox
    map
    sidebar
  needed containers:
    unlockedTabs
    ???

  actions:
    setsome inventory thing
    unlockTab

  store:
    inventory: bluebs and such
    unlockedTabs
    gameMap

*/


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      birbs: 0,
      bluebs: 10,
      wood: 0,

      maxbirbs: 10,
      maxbluebs: 100,
      maxwood: 100,

      unemployed: 0,
      farmers: 0,
      woodpeckers: 0,

      info: ['henlo!'],
      birbTime: 100,//how long it takes for birb to show up on average in ticks
    }
    this.pickBlueb = this.pickBlueb.bind(this)
  }

  componentDidMount(){ //runs on first render
    this.timerID = setInterval(
      () => this.tick(),
      100 //time between ticks (ms)
  );}
  sendInfo(newInfo){
    this.setState({ info: [newInfo, ...this.state.info ]})}
  prettify(input) {
    var output = Math.round(input * 1000) / 1000;
    return output;}

  pickBlueb(n){
    if (this.state.bluebs<this.state.maxbluebs){
      this.setState({bluebs: this.state.bluebs + n})}}
  getBirbs(){
    if ((1/this.state.birbTime > Math.random()) && (this.state.birbs<this.state.maxbirbs)){
      this.setState({birbs: this.state.birbs+1, unemployed: this.state.unemployed+1})
      this.sendInfo('birb lands')}}
  addFarmer(n){
    if (this.state.unemployed>=n){
      this.setState({farmers: this.state.farmers + n})
      this.setState({unemployed: this.state.unemployed - n})
    }}

  tick() {
    this.getBirbs()
    this.pickBlueb(this.state.farmers)
    this.setState({
    date:new Date(),
  });}

  render(){
    return (
      <div className="App">
        welcome 2 blueb land!

        <Sidebar{...this.state}/>

        <TabsContent
          {...this.state}
          pickBlueb = {this.pickBlueb}
          addFarmer = {this.addFarmer}
        />

        <Infobox info = {this.state.info}/>

      </div>
    );
  }


}

export default App;