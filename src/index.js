import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const container = document.createElement('div');
document.body.appendChild(container)

const store = createStore(rootReducer, {
  resources: {
    birbs: 0,
    bluebs: 0,
    wood: 0,

    maxbirbs: 10,
    maxbluebs: 100,
    maxwood: 100,

    unemployed: 0,
    farmers: 0,
    woodpeckers: 0,

  },
  visibleTabs: ['a', 'b', 'c'],

  info: ['henlo!'],
  birbTime: 100,//how long it takes for birb to show up on average in ticks
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)

//serviceWorker.unregister(); note i deleted the serviceworker
