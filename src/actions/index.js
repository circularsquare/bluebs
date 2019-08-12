
export const sendInfo = info => ({
  type: 'SEND_INFO',
  info})
export const tick = () => ({
  type: 'TICK'})

export const addTab = (key, name) => ({
  type: 'ADD_TAB', key, name})
export const addResource = name => ({
  type: 'ADD_RESOURCE', name})
export const addJob = name => ({
  type: 'ADD_JOB', name})
export const addBuilding = name => ({
  type: 'ADD_BUILDING', name})

export const changeBirbs = n => ({
  type: 'CHANGE_BIRBS', n })
export const adoptBirb = n => ({
  type: 'ADOPT_BIRB', n})

export const build = (name, n) => ({
  type: 'BUILD', name, n})
export const incrementCost = (name, n) => ({
  type: 'INCREMENT_COST', name, n})
export const harvest = (name, n) => ({
  type: 'HARVEST', name, n})
export const hire = (name, n) => ({
  type: 'HIRE', name, n})
export const addMaxBirbs = (n) => ({
  type: 'ADD_MAX_BIRBS', n})
export const set = (name, n) => ({
  type: 'SET', name, n})

let idCounter = 0
export const spawnUnit = (info) => ({
  type: 'SPAWN_UNIT',
  id: idCounter++,
  info})
export const moveUnit = (id, x, y) => ({
  type: 'MOVE_UNIT', id, x, y})
export const setUnitDest = (id, x, y) => ({
  type: 'SET_UNIT_DEST', id, x, y})
export const unitMove = (id) => ({
  type: 'UNIT_MOVE', id})
export const hireTraveller = (id, home, work) => ({
  type: 'HIRE_TRAVELLER', id, home, work})
export const toggleDisplay = (id) => ({
  type: 'TOGGLE_DISPLAY', id})
export const collect = (id) => ({
  type: 'COLLECT', id})
export const selectTile = (coordinates) => ({
  type: 'SELECT_TILE', coordinates})
export const makeTile = (coordinates, details) => ({
  type: 'MAKE_TILE', coordinates, details})
export const setPixSize = (n) => ({
  type: 'SET_PIXSIZE', n})
export const setCorner = (coords) => ({
  type: 'SET_CORNER', coords})
export const moveCorner = (coords) => ({
  type: 'MOVE_CORNER', coords})

export const research = (name) => ({
  type: 'RESEARCH', name,})
export const selectTech = (name) => ({
  type: 'SELECT_TECH', name,})
export const setProgression = (n) => ({
  type: 'SET_PROGRESSION', n})
export const setHunger = (n) => ({
  type: 'SET_HUNGER', n})

export const changeEffect = (name, target, n) => ({
  type: 'CHANGE_EFFECT', name, target, n})
export const applyEffects = (name, n) => ({
  type: 'APPLY_EFFECTS', name, n})
export const applyModifiers = (name, n) => ({
  type: 'APPLY_MODIFIERS', name, n})
export const income = (name, n) => ({
  type: 'INCOME', name, n})
export const load = () => ({
  type: 'LOAD'})
