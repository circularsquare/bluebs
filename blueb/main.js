


/*TODO:

  -change to a system with "Bluebs/sec", instead of
  adding directly to blueb number
  -figure out how to make certain features only appear
  after certain triggers
  -add a map
  -easier to use hiring system
  - make shit more object oriented!!!! to organize data

*/

var bluebs = 0;
var wood = 0;
var maxbluebs = 1000;
var maxwood = 1000;
var jobs = {
  'pickers': 0,
  'woodpeckers': 0,
  'unemployed': 0,
};
var birbs = 0;
var maxbirbs = 2;

var trainers = 0;
var sacrifices = 0;

var displayInfo = ["", "", "", "", "", "", "", "", "", ""];
var saveFile = {
  bluebs: bluebs,
  wood: wood,
  pickers: jobs['pickers'],
  woodpeckers: jobs['woodpeckers'],
};


function pickBlueb(){
  if (bluebs<maxbluebs){
    bluebs++;
    reload();
  }
}
function harvest(){
  if (bluebs<maxbluebs){
    if (bluebs+jobs['pickers']>maxbluebs){bluebs=maxbluebs;}
    else {bluebs += jobs['pickers'];}
  }
  if (wood<maxwood){
    if(wood+jobs['woodpeckers']>maxwood){wood=maxwood;}
    else {wood += jobs['woodpeckers']}
  }
  reload();
};
function findBirb(){
  if (birbs<maxbirbs && Math.random()<.2 && bluebs>1){
    sendInfo("a birb lands on ur hand... it wants bluebs");
    birbs+= 1;
    jobs['unemployed']++;
    reload();
  }
};

function hire(type, number){
  if(number>0){
    if(jobs['unemployed']>number){
      jobs[type]+=number;
      jobs['unemployed']-=number;
    } else if(jobs['unemployed']>0){
      jobs[type]+=jobs['unemployed'];
      jobs['unemployed']=0;
    }
  }
  else{
    if(jobs[type]>-number){
      jobs[type]+=number;
      jobs['unemployed']-=number;
    } else if(jobs[type]>0){
      jobs['unemployed']+=jobs[type];
      jobs[type]=0;
    }
  }
  reload();
}


function sacrifice(){
  var sacrificeCost = Math.floor(Math.pow(10, sacrifices+2));
  if (bluebs >= sacrificeCost) {
    bluebs = 0;
    jobs[pickers] = 0;
    trainers = 0;
    sacrifices += 1;
  }
  reload();
};

//make sure all displayed values r correct
function reload(){
  document.getElementById('bluebs').innerHTML = bluebs;
  document.getElementById('wood').innerHTML = wood;
  document.getElementById('maxbluebs').innerHTML = maxbluebs;
  document.getElementById('maxwood').innerHTML = maxwood;

  document.getElementById('birbs').innerHTML = birbs;
  document.getElementById('freeBirbs').innerHTML = jobs['unemployed'];
  document.getElementById('pickers').innerHTML = jobs['pickers'];
  document.getElementById('woodpeckers').innerHTML = jobs['woodpeckers'];
};

//saving
function save(){
  saveFile.bluebs=bluebs;
  saveFile.wood=wood;
  saveFile.pickers=jobs['pickers'];
  saveFile.woodpeckers=jobs['woodpeckers'];
  localStorage.setItem("save",JSON.stringify(saveFile));
};
function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.bluebs !== "undefined") bluebs = savegame.bluebs;
  if (typeof savegame.wood !== "undefined") wood = savegame.wood;
  if (typeof savegame.pickers !== "undefined") jobs['pickers'] = savegame.pickers;
  if (typeof savegame.woodpeckers !== "undefined") jobs['woodpeckers'] = savegame.woodpeckers;

  reload();
};
function reset(){localStorage.removeItem("save");}

//sends a string to the green dialog box on the bottom
function sendInfo(instring){
  outInfo = "";
  for (i = displayInfo.length-1; i>0; i-=1){
    displayInfo[i] = displayInfo[i-1];
  }
  displayInfo[0] = instring;
  for (i = 0; i < displayInfo.length; i++){
    outInfo += displayInfo[i] +"<br>";
  }
  document.getElementById('info').innerHTML = outInfo;
};

//for nums
function prettify(input){
    var output = Math.round(input * 1000)/1000;
	return output;
};
//logic flow functions (onload, setinterval)
function onLoad(){
    openTab(event, "tent")
    sendInfo("welcome!")
  }
//stuff to happen every sec should go in this loop
window.setInterval(function(){
    harvest();
    findBirb();
}, 1000);

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
