export const changeBluebs = n => ({
  type: 'CHANGE_BLUEBS',
  n })
export const changeWood = n => ({
  type: 'CHANGE_WOOD',
  n })
export const changeBirbs = n => ({
  type: 'CHANGE_BIRBS',
  n })

export const adoptBirb = n => ({
  type: 'ADOPT_BIRB',
  n})
export const hireBlueb = n => ({
  type: 'HIRE_BLUEB',
  n })
export const hireWood = n => ({
  type: 'HIRE_WOOD',
  n })

export const sendInfo = info => ({
  type: 'SEND_INFO',
  info})
export const tick = rng => ({
  type: 'TICK',
  rng})

export const addTab = (key, name) => ({
  type: 'ADD_TAB',
  key,
  name})
export const addResource = name => ({
  type: 'ADD_RESOURCE',
  name})

export const addMap = map => ({
  type: 'ADD_MAP',
  map})

export const buildHouse = n => ({
  type: 'BUILD_HOUSE',
  n})
export const build = (name, n) => ({
  type : 'BUILD',
  name, n})
