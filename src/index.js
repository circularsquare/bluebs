import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './containers/App';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const container = document.createElement('div');
document.body.appendChild(container)

const store = createStore(rootReducer, {
  resources: {
    'bluebs': 0,
    'wood': 0,

    'maxbluebs': 100,
    'maxwood': 100,
  },

  birbs: {
    total: 1,
    maxbirbs: 1,

    'unemployed': 1,
    'farmers': 0,
    'woodpeckers': 0,
    'scholars': 0,
  },

  buildings: {
    'house':{
      number: 0,
      desc: 'space for two birbs to live!' ,
      cost: {'wood':10} ,
      effect: '+2 max birbs' ,} , 
    'campfire':{
      number: 0,
      desc: 'keeps u and ur birbs warm' ,
      cost: {'wood':20} ,
      effect: '+1 happiness (does not stack)' ,} ,
  },

  info: {
    visibleTabs: {
      'home': 'tent', },
    visibleResources:[
      'bluebs',
      'wood',],
    visibleJobs:[
      'woodpeckers',
      'farmers',],
    visibleBuildings:[
      'house',
      'campfire',],

    info: ['henlo!'],
    time: ['spring', 1, 1],

    map: [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0],
          [3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0],
          [3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [3, 4, 0, 0, 1, 1, 1, 1, 0, 0, 0],
          [3, 4, 4, 0, 0, 1, 1, 1, 1, 0, 0],
          [3, 4, 4, 0, 0, 0, 1, 1, 1, 1, 0],
          [4, 4, 0, 2, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]],
  },
})






render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)

//serviceWorker.unregister(); note i deleted the serviceworker
