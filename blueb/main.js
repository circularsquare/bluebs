var bluebs = 0;
var pickers = 0;
var trainers = 0;
var saveFile = {
  bluebs: bluebs,
  pickers: pickers,
  trainers: trainers
}

function pickBlueb(n){
  bluebs += n;
  document.getElementById("bluebs").innerHTML = bluebs;
};

function trainPicker(n){
  pickers += n;
  document.getElementById("pickers").innerHTML = pickers;
};

function buyPicker(){
  var pickerCost = Math.floor(10 * Math.pow(1.1, pickers));
  if (bluebs >= pickerCost){
    pickers += 1;
    bluebs -= pickerCost;
    document.getElementById('pickers').innerHTML = pickers;
    document.getElementById('bluebs').innerHTML = bluebs;
  }
  document.getElementById('pickerCost').innerHTML = Math.floor(10*Math.pow(1.1, pickers));
}

function buyTrainer(){
  var trainerCost = Math.floor(10 * Math.pow(1.125, trainers));
  if (pickers >= trainerCost) {
    trainers += 1;
    pickers -= trainerCost;
    document.getElementById('pickers').innerHTML = pickers;
    document.getElementById('trainers').innerHTML = trainers;
  }
  document.getElementById('trainerCost').innerHTML = Math.floor(10*Math.pow(1.125, trainers));
}

//make sure all values r correct
function reload(){
  document.getElementById('pickers').innerHTML = pickers;
  document.getElementById('bluebs').innerHTML = bluebs;
  document.getElementById('trainers').innerHTML = trainers;
  document.getElementById('pickerCost').innerHTML = Math.floor(10*Math.pow(1.1, pickers));
  document.getElementById('trainerCost').innerHTML = Math.floor(10*Math.pow(1.125, trainers));
}

//saving
function save(){
  saveFile.bluebs=bluebs;
  saveFile.pickers=pickers;
  saveFile.trainers=trainers;
  localStorage.setItem("save",JSON.stringify(saveFile));
};
function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.bluebs !== "undefined") bluebs = savegame.bluebs;
  if (typeof savegame.pickers !== "undefined") pickers = savegame.pickers;
  if (typeof savegame.trainers !== "undefined") pickers = savegame.trainers;
  reload();
};
function reset(){localStorage.removeItem("save");}

//for nums
function prettify(input){
    var output = Math.round(input * 1000)/1000;
	return output;
};

//every sec
window.setInterval(function(){
  pickBlueb(pickers);
}, 1000);
window.setInterval(function(){
  trainPicker(trainers);
}, 1000);
