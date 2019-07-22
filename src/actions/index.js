
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
  type: 'ADD_JOB',
  name})
export const addMap = map => ({
  type: 'ADD_MAP', map})
export const addBuilding = name => ({
  type: 'ADD_BUILDING', name})

export const changeBirbs = n => ({
  type: 'CHANGE_BIRBS', n })
export const adoptBirb = n => ({
  type: 'ADOPT_BIRB', n})

export const build = (name, n) => ({
  type: 'BUILD', name, n})
export const harvest = (name, n) => ({
  type: 'HARVEST', name, n})
export const hire = (name, n) => ({
  type: 'HIRE', name, n})
export const addMaxBirbs = (n) => ({
  type: 'ADD_MAX_BIRBS', n})
export const set = (name, n) => ({
  type: 'SET', name, n})

let idCounter = 0
export const spawnUnit = (name, species, job, location) => ({
  type: 'SPAWN_UNIT',
  id: idCounter++,
  name, species, job, location })
export const moveUnit = (id, x, y) => ({
  type: 'MOVE_UNIT', id, x, y})

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
export const applyModifiers = (name, target, n) => ({
  type: 'APPLY_MODIFIERS', name, target, n})
export const income = (name, n) => ({
  type: 'INCOME', name, n})
export const load = () => ({
  type: 'LOAD'})
