/*TODO:
  -change to a system with "Bluebs/sec", instead of
  adding directly to blueb number
  -figure out how to make certain features only appear
  after certain triggers
  -add a map
  -easier to use hiring system
  - make shit more object oriented!!!! to organize data

*/
var res = {
  'bluebs': 0,
  'wood': 0
};
var maxbluebs = 1000;
var maxwood = 1000;
var jobs = {
  'pickers': 0,
  'woodpeckers': 0,
  'unemployed': 0
};
var bld = {
  'birdhouses': 0
};
var bldPrice = {
  'birdhouses': {
    'wood': 10
  }
};
var birbs = 0;
var maxbirbs = 2;
var trainers = 0;
var sacrifices = 0;
var displayInfo = ["", "", "", "", "", "", "", "", "", ""];
var saveFile = {
  bluebs: res['bluebs'],
  wood: res['wood'],
  pickers: jobs['pickers'],
  woodpeckers: jobs['woodpeckers']
}; //0 is plains
//1 is water
//2 is city
//3 is mountain
//4 is forest

var map = [[3, 3, 0, 1, 1, 1, 1, 1, 0, 0], [3, 3, 0, 1, 1, 1, 1, 1, 0, 0], [3, 3, 0, 0, 1, 1, 1, 1, 0, 0], [3, 4, 0, 0, 1, 1, 1, 1, 0, 0], [3, 4, 4, 0, 0, 1, 1, 1, 1, 0], [3, 4, 4, 0, 0, 0, 1, 1, 1, 1], [4, 4, 0, 2, 0, 0, 1, 1, 1, 1], [0, 0, 1, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]];

function pickBlueb() {
  if (res['bluebs'] < maxbluebs) {
    res['bluebs']++;
    reload();
  }
}

function chopWood() {
  if (res['wood'] < maxwood) {
    res['wood']++;
    reload();
  }
}

function harvest() {
  if (res['bluebs'] < maxbluebs) {
    if (res['bluebs'] + jobs['pickers'] > maxbluebs) {
      res['bluebs'] = maxbluebs;
    } else {
      res['bluebs'] += jobs['pickers'];
    }
  }

  if (res['wood'] < maxwood) {
    if (res['wood'] + jobs['woodpeckers'] > maxwood) {
      res['wood'] = maxwood;
    } else {
      res['wood'] += jobs['woodpeckers'];
    }
  }
  reload();
};

function findBirb() {
  if (birbs < maxbirbs && Math.random() < .2 && res['bluebs'] > 1) {
    sendInfo("a birb lands on ur hand... it wants bluebs");
    birbs += 1;
    jobs['unemployed']++;
    reload();
  }
};

function hire(type, number) {
  if (number > 0) {
    if (jobs['unemployed'] > number) {
      jobs[type] += number;
      jobs['unemployed'] -= number;
    } else if (jobs['unemployed'] > 0) {
      jobs[type] += jobs['unemployed'];
      jobs['unemployed'] = 0;
    }
  } else {
    if (jobs[type] > -number) {
      jobs[type] += number;
      jobs['unemployed'] -= number;
    } else if (jobs[type] > 0) {
      jobs['unemployed'] += jobs[type];
      jobs[type] = 0;
    }
  }

  reload();
}

function build(type, number) {
  if (number <= 0) {
    bld[type] += number;
  } else {
    for (i = 0; i < number; i++) {
      var canAfford = true;

      for (resource in bldPrice[type]) {
        if (res[resource] < bldPrice[type][resource]) {
          canAfford = false;
          break;
        }
      }
      if (canAfford) {
        for (resource in bldPrice[type]) {
          res[resource] -= bldPrice[type][resource];
        }
        bld[type] += 1;
      } else {
        break;
      }
    }
  }

  reloadCaps();
  reload();
}

function reloadCaps() {
  maxbluebs = 1000;
  maxwood = 1000;
  maxbirbs = 2 + 2 * bld['birdhouses'];
}

function reload() {
  document.getElementById('bluebs').innerHTML = res['bluebs'];
  document.getElementById('wood').innerHTML = res['wood'];
  document.getElementById('maxbluebs').innerHTML = maxbluebs;
  document.getElementById('maxwood').innerHTML = maxwood;
  document.getElementById('birbs').innerHTML = birbs;
  document.getElementById('maxbirbs').innerHTML = maxbirbs;
  document.getElementById('freeBirbs').innerHTML = jobs['unemployed'];
  document.getElementById('pickers').innerHTML = jobs['pickers'];
  document.getElementById('woodpeckers').innerHTML = jobs['woodpeckers'];
  document.getElementById('birdhouses').innerHTML = bld['birdhouses'];
}

;

function drawMap() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var pixSize = 12;
  for (col = 0; col < map.length; col++) {
    for (row = 0; row < map[0].length; row++) {
      if (map[col][row] == 0) {
        ctx.fillStyle = '#85ff3f';
      } //plain
      else if (map[col][row] == 1) {
          ctx.fillStyle = '#54afff';
        } //ocean
        else if (map[col][row] == 2) {
            ctx.fillStyle = '#d64017';
          } //city
          else if (map[col][row] == 3) {
              ctx.fillStyle = '#959699';
            } //mountain
            else if (map[col][row] == 4) {
                ctx.fillStyle = '#1cb525';
              } //forest


      ctx.fillRect(pixSize * row, pixSize * col, pixSize, pixSize);
    }
  } //ctx.fillStyle='#d64017';
  //ctx.fillRect(43, 43, 2, 2);

}

; //saving

function save() {
  saveFile.bluebs = res['bluebs'];
  saveFile.wood = res['wood'];
  saveFile.pickers = jobs['pickers'];
  saveFile.woodpeckers = jobs['woodpeckers'];
  localStorage.setItem("save", JSON.stringify(saveFile));
}

;

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.bluebs !== "undefined") res['bluebs'] = savegame.bluebs;
  if (typeof savegame.wood !== "undefined") res['wood'] = savegame.wood;
  if (typeof savegame.pickers !== "undefined") jobs['pickers'] = savegame.pickers;
  if (typeof savegame.woodpeckers !== "undefined") jobs['woodpeckers'] = savegame.woodpeckers;
  reload();
}

;

function reset() {
  localStorage.removeItem("save");
} //sends a string to the green dialog box on the bottom


function sendInfo(instring) {
  outInfo = "";

  for (i = displayInfo.length - 1; i > 0; i -= 1) {
    displayInfo[i] = displayInfo[i - 1];
  }

  displayInfo[0] = instring;

  for (i = 0; i < displayInfo.length; i++) {
    outInfo += displayInfo[i] + "<br>";
  }

  document.getElementById('info').innerHTML = outInfo;
}

; //for nums

function prettify(input) {
  var output = Math.round(input * 1000) / 1000;
  return output;
}

; //logic flow functions (onload, setinterval)

function onLoad() {
  openTab(event, "tent");
  drawMap();
  sendInfo("welcome!");
} //stuff to happen every sec should go in this loop


window.setInterval(function () {
  harvest();
  findBirb();
  tick();
}, 1000);

function tick() {
  var element = _react["default"].createElement("div", null, _react["default"].createElement("h1", null, "Hello, world!"), " ", _react["default"].createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));

  ReactDOM.render(element, document.getElementById('clock'));
} //some css stuff stolen from w3schools


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
//# sourceMappingURL=main.js.map
