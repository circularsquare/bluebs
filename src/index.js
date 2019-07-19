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
    'bluebs': {number: 0, effects: {}, incomes: {}},
    'wood': {number: 0, effects: {}, incomes: {}},
    'knowledge': {number: 0, effects: {}, incomes: {}},
    'maxbluebs': {number: 100, effects: {}, incomes: {}},
    'maxwood': {number: 100, effects: {}, incomes: {}},
    'maxknowledge': {number: 0, effects: {}, incomes: {}},
    'maxbirbsResource': {number: 0, effects: {}, incomes: {}},
  },

  birbs: {
    'total': 0,
    'maxbirbs': 0,
    'unemployed': 0,
    'farmers': 0,
    'woodpeckers': 0,
    'scholars': 0,
  },

  buildings: {
    'base':{
      number: 0,
      desc: "ur tent! (wait, u shouldn't be seeing this...)",
      cost: {},
      effect: 'gives u some starting maxwood and maxbluebs', },
    'birbhouse':{
      number: 0,
      desc: 'space for two birbs to live!' ,
      cost: {'wood':10},
      effect: '+2 max birbs', },
    'campfire':{
      number: 0,
      desc: 'keeps u and ur birbs warm',
      cost: {'wood':20},
      effect: '+1 happiness (does not stack)', },
    'library':{
      number: 0,
      desc: 'place for ur birbs to study',
      cost: {'wood':30} ,
      effect: '+2 max scholar birbs', },
    'shed':{
      number: 0,
      desc: 'a storage spot',
      cost: {'wood':40},
      effect: '100 extra blueb sapce and 100 extra wood space',},
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
      'birbhouse',
      'campfire',],
    info: ['henlo!'],
    time: ['spring', 1, 1],
    map: [],
    selectedTech: 'library',
    happiness: 1.00,
  },

  units: [],

  tech:{
    'library': {position: [100, 0], researched: true, parents: [], children: ['construction', 'chemistry'] },
    'cartography': {position: [150, 50], researched: false, parents: ['library'], children: [] },
    'chemistry': {position: [50, 50], researched: false, parents: ['library'], children: ['biology'] },
    'biology': {position: [50, 100], researched: false, parents: ['chemistry'], children:[] },
  },

  effects: {
    constant: {
      'base': {'maxbluebs': 100,
               'maxwood': 100,},
      'birbhouse': {'maxbirbs': 2},
      'library': {'maxknowledge': 10},
      'shed': {'maxwood': 100,
               'maxbluebs': 100,},
    },
    income: {
      'total': {'bluebs': -.01},
      'farmers': {"bluebs": .1},
      'woodpeckers': {'wood': .1},
      'scholars': {'knowledge': .01},
    },
  }

})






render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)

//serviceWorker.unregister(); note i deleted the serviceworker
