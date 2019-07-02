import React from 'react';
import './App.css';
import Tabs from './Tabs'
import Sidebar from './Sidebar'
import Infobox from './Infobox'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: 0, bluebs: 10, info:'henlo'}
  }

  componentDidMount(){  //lifecycle methods... runs after its rendered
    this.timerID = setInterval( //sets up the ticking timer
      () => this.tick(),
      100
    );}
  tick() {
    this.setState({
    date:new Date(),
    bluebs: (this.state.bluebs + 1)
  });}

  handleClick(){
    this.setState({info: 'hiii'});
  }

  render(){
    return (
      <div className="App">
        welcome to bluebs game
        <Sidebar bluebs = {this.state.bluebs}/>
        <Tabs>
          <div label="tent">
            yo!<br/>
            imagine.<br/>
            having things here.<br/>
            wow.
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div label="othertent">
            wow. other tent.
          </div>
        </Tabs>
        <Infobox info = {this.state.info}/>

        <button onClick = {this.handleClick.bind(this)}> hi </button>

      </div>
    );
  }
}

export default App;
