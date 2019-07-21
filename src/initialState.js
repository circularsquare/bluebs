
export {initState}
const initState = {
  resources: {
    'bluebs': 0,
    'wood': 0,
    'clay': 0,
    'stone': 0,
    'knowledge': 0,
    'books': 0,
    'drawings': 0,

    'maxbluebs': 0,
    'maxwood': 0,
    'maxclay': 0,
    'maxstone': 0,
    'maxknowledge': 0,
    'maxbooks': 0,
    'maxdrawings': 0,

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
    'box':{
      number: 0,
      desc: 'a box to put stuff un',
      cost: {'wood':40},},
    'campfire':{
      number: 0,
      desc: 'keeps u and ur birbs warm and happy',
      cost: {'wood':20},},
    'library':{
      number: 0,
      desc: 'place to store all ur drawings and books!',
      cost: {'wood':30} ,},
  },

  info: {
    visibleTabs: {
      'home': 'tent', },
    visibleResources:[
      'bluebs',
      'wood',
      'books',
      'drawings',],
    visibleJobs:[
      'woodpeckers',
      'farmers',],
    visibleBuildings:[
      'nest',],
    info: [],
    time: ['spring', 1, 1],
    map: [],
    selectedTech: 'studying',
    happiness: 1.00,
    progression: 0,
    hunger: 0,
    recipes: {
      'drawings': {},
      'books': {'wood': 1, 'bluebs': 1},
    }
  },

  units: [],

  tech:{
    'studying': {position: [100, 0], researched: 0, parents: [], children: ['training', 'woodworking'],
      description: 'learn new things about the world!', cost:{'knowledge': 2}},
    'training': {position: [150, 40], researched: 0, parents: ['studying'], children: ['teaching'],
      description: 'teach ur birbs tricks!', cost:{'knowledge':5}},
    'teaching': {position: [200, 80], researched: 0, parents: ['training'], children: ['drawing'],
      description: 'maybe ur birbs can learn on their own?', cost:{'knowledge':10}},
    'drawing': {position: [190, 120], researched: 0, parents: ['teaching'], children: ['writing'],
      description: 'draw with stick to remember things', cost: {'knowledge': 30}},

    'woodworking': {position: [50, 50], researched: 0, parents: ['studying'], children: ['digging', 'fire'],
      description: 'carve fun things', cost:{'knowledge':10} },
    'digging': {position: [10, 90], researched: 0, parents: ['woodworking'], children: ['pottery'],
      description: 'there r all sorts of things in the ground...', cost: {'knowledge': 40}},
    'fire': {position: [100, 90], researched: 0, parents: ['woodworking'], children: ['pottery'],
      description: 'hot!', cost: {'knowledge': 30}},

    'math': {position: [130, 160], researched: 0, parents: ['drawing'], children: ['cartography'],
      description: 'think about numbers n stuf.. ', cost:{'knowledge': 20}},
    'writing': {position: [210, 160], researched: 0, parents:['drawing'], children: ['cartography'],
      description: 'draw with stick to remember things', cost: {'knowledge': 10}},
    'cartography': {position: [10, 190], researched: 0, parents:['writing', 'math'], children: [],
      description: 'doodle a map', cost: {'knowledge': 10}},
  },

  effects: {
    constant: {
      'base': {'maxbluebs': 100,
               'maxwood': 100,
               'maxknowledge': 50000000,
               'maxdrawings': 10,
               'maxbooks': 3,},
      'nest': {'maxbirbs': 2},
      'birbhouse': {'maxbirbs': 4},
      'library': {'maxbooks':20,
                  'maxdrawings': 20},
      'box': {'maxwood': 100,
              'maxbluebs': 100,
              'maxclay': 40,
              maxstone: 20,},
      'drawings': {'maxknowledge': .1},
      'books': {'maxknowledge': 1},
    },
    income: {
      'birbs': {'bluebs': -.005},
      'farmers': {"bluebs": .05},
      'woodpeckers': {'wood': .05},
      'scholars': {'knowledge': .003},
    },
    modifiers: {

    }
  },

}
