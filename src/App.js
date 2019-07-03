import React from 'react';
import './App.css';
import Tabs from './Tabs'
import Sidebar from './Sidebar'
import Infobox from './Infobox'
import Map from './Map.js'

var game = require('./game');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {bluebs: 10, info: ['henlo!']}
    this.pickBlueb = this.pickBlueb.bind(this)
  }

  pickBlueb(){
    this.setState({bluebs: this.state.bluebs + 1})
  }

  tick() {
    this.setState({
    date:new Date(),
  });}

  componentDidMount(){ //runs on first render
    this.timerID = setInterval(
      () => this.tick(),
      100 //time between ticks (ms)
  );}
  sendInfo(newInfo){
    this.setState({ info: [newInfo, ...this.state.info ]})
  }
  prettify(input) {
    var output = Math.round(input * 1000) / 1000;
    return output;
  }


  render(){
    return (
      <div className="App">
        welcome 2 blueb land!

        <Sidebar bluebs = {this.state.bluebs}/>

        <Tabs>
          <div label="home">
            ur at home! <br/>
            <button onClick={this.pickBlueb}> pick blueb </button>
          </div>
          <div label="town">
            your people
          </div>
          <div label="map">
            its a map.
            <Map />
          </div>
        </Tabs>

        <Infobox info = {this.state.info}/>

      </div>
    );
  }
}

export default App;
