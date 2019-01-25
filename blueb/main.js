var bluebs = 0;
var pickers = 0;
var trainers = 0;
var sacrifices = 0;
var saveFile = {
  bluebs: bluebs,
  pickers: pickers,
  trainers: trainers,
  sacrifices: sacrifices
}



function pickBlueb(n){
  bluebs += n;
  reload();
};
function trainPicker(n){
  pickers += n;
  reload();
};
function buyPicker(){
  var pickerCost = Math.floor(10 * Math.pow(1.1, pickers/((Math.pow(sacrifices,3)/3)+1)));
  if (bluebs >= pickerCost){
    pickers += 1;
    bluebs -= pickerCost;
  }
  reload();
};

function buyTrainer(){
  var trainerCost = Math.floor(10 * Math.pow(1.125, trainers/((Math.pow(sacrifices,3)/5)+1)));
  if (pickers >= trainerCost) {
    trainers += 1;
    pickers -= trainerCost;
  }
  reload();
};

function sacrifice(){
  var sacrificeCost = Math.floor(Math.pow(10, sacrifices+2));
  if (bluebs >= sacrificeCost) {
    bluebs = 0;
    pickers = 0;
    trainers = 0;
    sacrifices += 1;
  }
  reload();
};

//make sure all displayed values r correct
function reload(){
  document.getElementById('bluebs').innerHTML = bluebs;
  document.getElementById('pickers').innerHTML = pickers;
  document.getElementById('trainers').innerHTML = trainers;
  document.getElementById('sacrifices').innerHTML = sacrifices;
  document.getElementById('pickerCost').innerHTML = Math.floor(10 * Math.pow(1.1, pickers/((Math.pow(sacrifices,3)/3)+1)));
  document.getElementById('trainerCost').innerHTML = Math.floor(10 * Math.pow(1.125, trainers/((Math.pow(sacrifices,3)/5)+1)));
  document.getElementById('sacrificeCost').innerHTML = Math.pow(10, sacrifices+2);
};

//saving
function save(){
  saveFile.bluebs=bluebs;
  saveFile.pickers=pickers;
  saveFile.trainers=trainers;
  saveFile.sacrifices=sacrifices;
  localStorage.setItem("save",JSON.stringify(saveFile));
};
function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.bluebs !== "undefined") bluebs = savegame.bluebs;
  if (typeof savegame.pickers !== "undefined") pickers = savegame.pickers;
  if (typeof savegame.trainers !== "undefined") trainers = savegame.trainers;
  if (typeof savegame.sacrifices !== "undefined") sacrifices = savegame.sacrifices;
  reload();
};
function reset(){localStorage.removeItem("save");}

//for nums
function prettify(input){
    var output = Math.round(input * 1000)/1000;
	return output;
};
//logic flow functions (onload, setinterval)
{
  function onLoad(){
    openTab(event, "tent")
  }
  //stuff to happen every sec should go in this loop
  window.setInterval(function(){
    pickBlueb(pickers);
    trainPicker(trainers);
  }, 1000);
}

//some css stuff stolen from w3schools
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
