var exports = module.exports = {};


var getValue = (target, buildings=null, resources=null, tech=null,) => { //gets the object of a name (ex: gets the number of 'woodpeckers', or the building object of 'birbhouse')
  if (buildings){
    for (const name of Object.keys(buildings)){
      if (name==target){
        return [buildings[name], 'building']}}}
  if (resources){
    for (const name of Object.keys(resources)){
      if (name==target){
        return [resources[name], 'resource']}}}
  if (tech){
    for (const name of Object.keys(tech)){
      if (name==target){
        return [tech[name], 'tech']}}}
  return false}
var getNum = (target, buildings=null, resources=null, tech=false,) => {
  var value = getValue(target, buildings, resources, tech)
  if (value[1]=='tech'){return value[0].researched}
  if (value[1]=='building'){return value[0].number}
  if (value[1]=='resource'){return value[0]}
  return(value[0])}

exports.getNum=getNum
