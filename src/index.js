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
    'knowledge': 0,
    'maxbluebs': 0,
    'maxwood': 0,
    'maxknowledge': 0,

    'birbs': 0,
    'maxbirbs': 0,
    'unemployed': 0,
    'farmers': 0,
    'woodpeckers': 0,
    'scholars': 0,
  },

  buildings: {
    'base':{
      number: 1,
      desc: "ur tent! (wait, u shouldn't be seeing this...)",
      cost: {},},
    'nest':{
      number: 0,
      desc: 'a little home for two birbs to live',
      cost: {'wood':10,},},
    'birbhouse':{
      number: 0,
      desc: 'space for four birbs to live!' ,
      cost: {'wood':30},},
    'campfire':{
      number: 0,
      desc: 'keeps u and ur birbs warm',
      cost: {'wood':20},},
    'library':{
      number: 0,
      desc: 'place for ur birbs to study',
      cost: {'wood':30} ,},
    'shed':{
      number: 0,
      desc: 'a storage spot',
      cost: {'wood':40},},
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
      'nest',],
    info: [],
    time: ['spring', 1, 1],
    map: [],
    selectedTech: 'scholarship',
    happiness: 1.00,
    progression: 0,
    hunger: 0,
  },

  units: [],

  tech:{
    'scholarship': {position: [100, 0], researched: 0, parents: [], children: ['training', 'woodworking'],
      description: 'learn new things about the world!'},
    'training': {position: [150, 50], researched: 0, parents: ['scholarship'], children: ['teaching'],
      description: 'teach ur birbs tricks!' },
    'teaching': {position: [150, 100], researched: 0, parents: ['training'], children: [],
      description: 'maybe ur birbs can learn on their own?' },
    'woodworking': {position: [50, 50], researched: 0, parents: ['scholarship'], children: ['math'],
      description: 'carve fun things' },
    'math': {position: [20, 100], researched: 0, parents: ['woodworking'], children: [],
      description: 'think about numbers n stuf.. '},
  },

  effects: {
    constant: {
      'base': {'maxbluebs': 100,
               'maxwood': 100,
               'maxknowledge': 10,},
      'nest': {'maxbirbs': 2},
      'birbhouse': {'maxbirbs': 4},
      'library': {'maxknowledge': 10},
      'shed': {'maxwood': 100,
               'maxbluebs': 100,},
      'campfire': {},

    },
    income: {
      'birbs': {'bluebs': -.003},
      'farmers': {"bluebs": .03},
      'woodpeckers': {'wood': .03},
      'scholars': {'knowledge': .003},
    },
    modifiers: {

    }
  }

})






render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)

//serviceWorker.unregister(); note i deleted the serviceworker
