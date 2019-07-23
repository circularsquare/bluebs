
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
    'boxes': 0,

    'maxbluebs': 0,
    'maxwood': 0,
    'maxclay': 0,
    'maxstone': 0,
    'maxknowledge': 0,
    'maxbooks': 0,
    'maxdrawings': 0,
    'maxboxes': 0,

    'birbs': 0,
    'maxbirbs': 0,
    'unemployed': 0,
    'foragers': 0,
    'woodpeckers': 0,
    'scholars': 0,
    'diggers': 0,
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
      desc: 'keeps u and ur birbs warm and happy',
      cost: {'wood':20},},
    'library':{
      number: 0,
      desc: 'place to store all ur drawings and books!',
      cost: {'wood':30} ,},
    'furnace': {
      number: 0,
      desc: 'burnsss',
      cost: {'clay':10} ,},

  },

  info: {
    visibleTabs: {
      'home': 'tent', },
    visibleResources:[
      'bluebs',
      'wood',],
    visibleJobs:[
      'woodpeckers',
      'foragers',],
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
      'boxes': {'wood': 50},
      'drawings': {},
      'books': {'wood': 1, 'bluebs': 1},
    }
  },

  units: [],

  tech:{
    'studying': {position: [150, 0], researched: 0, parents: [], children: ['training', 'woodworking'],
      description: 'learn new things about the world!', cost:{'knowledge': 2}},
    'training': {position: [200, 40], researched: 0, parents: ['studying'], children: ['teaching'],
      description: 'teach ur birbs tricks!', cost:{'knowledge':5}},
    'teaching': {position: [250, 80], researched: 0, parents: ['training'], children: ['drawing'],
      description: 'maybe ur birbs can learn on their own?', cost:{'knowledge':10}},
    'drawing': {position: [240, 120], researched: 0, parents: ['teaching'], children: ['writing'],
      description: 'draw with stick to remember things', cost: {'knowledge': 30}},

    'woodworking': {position: [100, 50], researched: 0, parents: ['studying'], children: ['digging', 'fire', 'construction'],
      description: 'carve fun things', cost:{'knowledge':20, 'wood': 20} },
    'digging': {position: [60, 100], researched: 0, parents: ['woodworking'], children: ['pottery'],
      description: 'there r all sorts of things in the ground...', cost: {'knowledge': 40, 'wood': 5}},
    'fire': {position: [150, 100], researched: 0, parents: ['woodworking'], children: ['pottery'],
      description: 'hot!', cost: {'knowledge': 30, 'wood': 15}},
    'pottery': {position: [130, 135], researched: 0, parents: ['digging', 'fire'], children: [],
      description: 'pots to hold things', cost: {'knowledge': 40}},
    'construction': {position: [10, 70], researched: 0, parents: ['woodworking'], children: [],
      description: 'build birb houses that can hold more birbs... and maybe more :o', cost:{'knowledge': 60}},

    'math': {position: [260, 160], researched: 0, parents: ['drawing'], children: ['cartography'],
      description: 'think about numbers n stuf.. ', cost:{'knowledge': 20}},
    'writing': {position: [180, 160], researched: 0, parents:['drawing'], children: ['cartography'],
      description: 'draw with stick to remember things', cost: {'knowledge': 10}},
    'cartography': {position: [250, 200], researched: 0, parents:['writing', 'math'], children: [],
      description: 'doodle a map', cost: {'knowledge': 10}},
    'exploration': {position: [260, 240], researched: 0, parents:['cartography'], children: [],
      description: 'send ur birbs on an adventure!', cost: {'knowledge': 30}},
  },

  effects: {
    constant: {
      'base': {'maxbluebs': 100,
               'maxwood': 100,
               'maxclay': 100,
               'maxstone': 50,
               'maxknowledge': 50,
               'maxboxes': 10,
               'maxdrawings': 10,
               'maxbooks': 10,},
      'nest': {'maxbirbs': 2},
      'birbhouse': {'maxbirbs': 4},
      'library': {'maxbooks':20,
                  'maxdrawings': 20},
      'boxes': {'maxwood': 100,
              'maxbluebs': 100,
              'maxclay': 40,
              maxstone: 20,
              maxbooks: 2,},
      'drawings': {'maxknowledge': .1},
      'books': {'maxknowledge': 1},
    },
    income: {
      'birbs': {'bluebs': -.005},
      'foragers': {"bluebs": .05},
      'woodpeckers': {'wood': .05},
      'diggers': {'clay': .01,
                  'stone': .005,},
      'scholars': {'knowledge': .003},
      'furnace': {'wood': -.01,
                  'clay': .01,},
    },
    modifiers: {
      'library': {'scholars': {'knowledge': {income: 1, value: .1}}},
      'campfire': {'nest': {'maxbirbs': {income: 0, value: .1}}},
    }
  },

}
