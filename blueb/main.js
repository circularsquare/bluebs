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
  document.getElementById("bluebs").innerHTML = bluebs;
};

function trainPicker(n){
  pickers += n;
  document.getElementById("pickers").innerHTML = pickers;
};

function buyPicker(){
  var pickerCost = Math.floor(10 * Math.pow(1.1, pickers/((Math.pow(sacrifices,3)/3)+1)));
  if (bluebs >= pickerCost){
    pickers += 1;
    bluebs -= pickerCost;
    document.getElementById('pickers').innerHTML = pickers;
    document.getElementById('bluebs').innerHTML = bluebs;
  }
  document.getElementById('pickerCost').innerHTML = Math.floor(10*Math.pow(1.1, pickers));
}

function buyTrainer(){
  var trainerCost = Math.floor(10 * Math.pow(1.125, trainers/((Math.pow(sacrifices,3)/5)+1)));
  if (pickers >= trainerCost) {
    trainers += 1;
    pickers -= trainerCost;
    document.getElementById('pickers').innerHTML = pickers;
    document.getElementById('trainers').innerHTML = trainers;
  }
  document.getElementById('trainerCost').innerHTML = Math.floor(10*Math.pow(1.125, trainers));
}

function sacrifice(){
  var sacrificeCost = Math.floor(Math.pow(10, sacrifices+2));
  if (bluebs >= sacrificeCost) {
    bluebs = 0;
    pickers = 0;
    trainers = 0;
    sacrifices += 1;
    document.getElementById('bluebs').innerHTML = bluebs;
    document.getElementById('pickers').innerHTML = pickers;
    document.getElementById('trainers').innerHTML = trainers;
  }
  document.getElementById('sacrificeCost').innerHTML = Math.floor(Math.pow(10, sacrifices+2));
}

//make sure all values r correct
function reload(){
  document.getElementById('pickers').innerHTML = pickers;
  document.getElementById('bluebs').innerHTML = bluebs;
  document.getElementById('trainers').innerHTML = trainers;
  document.getElementById('sacrifices').innerHTML = sacrifices;
  document.getElementById('pickerCost').innerHTML = Math.floor(10*Math.pow(1.1, pickers));
  document.getElementById('trainerCost').innerHTML = Math.floor(10*Math.pow(1.125, trainers));
  document.getElementById('sacrificeCost').innerHTML = Math.floor(Math.pow(10, sacrifices+2));
}

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
  if (typeof savegame.trainers !== "undefined") pickers = savegame.trainers;
  if (typeof savegame.sacrifices !== "undefined") pickers = savegame.sacrifices;
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
