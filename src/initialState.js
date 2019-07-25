
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
    'ceramic': 0,

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

    'happiness': 1.0,
  },

  buildings: {
    'base':{
      number: 1,
      desc: "ur tent! (wait, u shouldn't be seeing this...)",
      cost: {},
      costRatio: 0,},
    'nest':{
      number: 0,
      desc: 'a little home for two birbs to live',
      cost: {'wood':10,},
      costRatio: 1.1,},
    'birbhouse':{
      number: 0,
      desc: 'space for four birbs to live!' ,
      cost: {'wood':30},
      costRatio: 1.1,},
    'campfire':{
      number: 0,
      desc: 'keeps u and ur birbs warm and happy',
      cost: {'wood':20},
      costRatio: 2,},
    'library':{
      number: 0,
      desc: 'place to store all ur drawings and books!',
      cost: {'wood':30},
      costRatio: 1.1},
    'kiln': {
      number: 0,
      desc: 'fires pottery',
      cost: {'clay':10},
      costRatio: 1.1, },
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
    allJobs: [
      'foragers', 'woodpeckers', 'scholars', 'diggers'],
    visibleBuildings:[
      'nest',],
    info: [],
    time: ['spring', 1, 1],
    tileTypes:
    [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 4, 0, 0, 0, 0, 0, 1],
     [3, 3, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 4, 4, 0, 0, 0, 0],
     [3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 4, 0, 0, 0, 0],
     [3, 4, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
     [3, 4, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
     [3, 4, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 3, 3, 0, 3, 0, 0, 0, 0],
     [4, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 3, 3, 0, 3, 0, 0, 0, 0],
     [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0],
     [4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 3, 0, 0],
     [4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0],
     [4, 4, 0, 0, 0, 4, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 0, 0],
     [4, 4, 4, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 4, 0, 3, 3],
     [4, 4, 4, 0, 4, 4, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 0, 0, 0, 3],
     [4, 4, 0, 0, 0, 0, 4, 0, 0, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 3],
     [4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 4, 0, 0],],
    tiles: {
      3000004: {color: '#222', type: 'field', bluebCapacity: 100, woodCapacity: 50},
    },
    selectedTile: 3000004,
    selectedTech: 'studying',
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
    'drawing': {position: [240, 120], researched: 0, parents: ['teaching'], children: ['writing', 'geometry'],
      description: 'draw with stick to remember things', cost: {'knowledge': 30}},

    'woodworking': {position: [100, 40], researched: 0, parents: ['studying'], children: ['digging', 'fire', 'construction'],
      description: 'carve fun things', cost:{'knowledge':20, 'wood': 20} },
    'digging': {position: [40, 80], researched: 0, parents: ['woodworking'], children: ['pottery', 'mining',],
      description: 'there r all sorts of things in the ground...', cost: {'knowledge': 40, 'wood': 5}},
    'fire': {position: [140, 80], researched: 0, parents: ['woodworking'], children: ['pottery'],
      description: 'hot!', cost: {'knowledge': 30, 'wood': 15}},
    'pottery': {position: [95, 120], researched: 0, parents: ['digging', 'fire'], children: [],
      description: 'pots to hold things', cost: {'knowledge': 40}},
    'construction': {position: [170, 180], researched: 0, parents: ['woodworking', 'geometry'], children: [],
      description: 'build birb houses that can hold more birbs... and maybe more :o', cost:{'knowledge': 60}},

    'mining': {position: [10, 115], researched: 0, parents: ['digging'], children: ['masonry'],
      description: 'shiny rocks time', cost: {'knowledge': 200, 'stone': 20}},
    'masonry': {position: [5, 150], researched: 0, parents: ['mining'], children: [],
      description: 'its brick', cost: {'knowledge': 200, 'stone': 100}},

    'agriculture': {position: [50, 175], researched: 0, parents: ['digging'], children: [],
      description: 'maybe if we plant more blueberry bushes we can get more blueberries ovo', cost: {'knowledge': 200, 'clay': 20, 'wood': 100}},

    'geometry': {position: [200, 150], researched: 0, parents: ['drawing'], children: ['cartography', 'construction'],
      description: 'think about numbers n stuf.. ', cost:{'knowledge': 20}},
    'writing': {position: [290, 160], researched: 0, parents:['drawing'], children: ['cartography'],
      description: 'draw with stick to remember things', cost: {'knowledge': 10}},
    'cartography': {position: [250, 200], researched: 0, parents:['writing', 'geometry'], children: [],
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
               'maxbooks': 2,},
      'nest': {'maxbirbs': 2},
      'birbhouse': {'maxbirbs': 4},
      'library': {'maxbooks': 30,
                  'maxdrawings': 30},
      'boxes': {'maxwood': 10,
              'maxbluebs': 100,
              'maxclay': 10,
              'maxstone': 5,
              'maxbooks': 1,},
      'shed': {'maxboxes': 10,
              'maxwood': 100 ,
              'maxclay': 100,
              'maxstone': 100,},
      'drawings': {'maxknowledge': .1},
      'books': {'maxknowledge': 1},
      'campfire': {'happiness': .01},
    },
    income: {
      'birbs': {'bluebs': -.005},
      'foragers': {"bluebs": .02},
      'woodpeckers': {'wood': .02},
      'diggers': {'clay': .01,
                  'stone': .002,},
      'scholars': {'knowledge': .003},
      'kiln': {'wood': -.01,
              'clay': -.01,
              'ceramic': .001,},
    },
    modifiers: {
      'library': {'scholars': {'knowledge': {income: 1, value: .1}}},
      'campfire': {'nest': {'maxbirbs': {income: 0, value: .1}}},

    }
  },
}



export {initState}
