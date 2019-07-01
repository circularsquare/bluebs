import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const container = document.createElement('div');
document.body.appendChild(container)

ReactDOM.render(<App />, document.getElementById('root'));





function tick() {
  const element = (<div>{new Date().toLocaleTimeString()}</div>);
  ReactDOM.render(element, document.getElementById('clock'));}


function onLoad(){
    document.getElementbyId('tent').click();
    sendInfo("welcome!")

}
window.setInterval(function(){
    tick();
}, 1000);

function sendInfo(instring){
  var outInfo = "";
  var displayInfo = ""; //??? is this right?
  for (var i = displayInfo.length-1; i>0; i-=1){
    displayInfo[i] = displayInfo[i-1];
  }
  displayInfo[0] = instring;
  for (i = 0; i < displayInfo.length; i++){
    outInfo += displayInfo[i] +"<br>";
  }
  document.getElementById('info').innerHTML = outInfo;
};







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:2') https://bit.ly/CR)A-PWA
serviceWorker.unregister();
