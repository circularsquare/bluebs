import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';



const container = document.createElement('div');
document.body.appendChild(container)
ReactDOM.render(<App />, container);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:2') https://bit.ly/CR)A-PWA
serviceWorker.unregister();
