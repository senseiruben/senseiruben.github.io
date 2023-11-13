// variables
var meat = 10
var drones = 0
var dronesBought = 0

var queens = 0
var queensBought = 0

var nests = 0
var nestsBought = 0

var greaterQueens = 0
var greaterQueensBought = 0

// important functions


const moneyFormat = (number) => {
  let num = number;
  num = Number(num);
  const billions = num / 1.0e9;
  const millions = num / 1.0e6;
  const thousands = num / 1.0e3;
  if (Math.abs(num) >= 1.0e9 && Math.abs(billions) >= 100) {
    return `${Math.round(billions)}B`
  }
  if (Math.abs(num) >= 1.0e9 && Math.abs(billions) >= 10) {
    return `${billions.toFixed(1)}B`
  }
  if (Math.abs(num) >= 1.0e9) {
    return `${billions.toFixed(2)}B`
  }
  if (Math.abs(num) >= 1.0e6 && Math.abs(millions) >= 100) {
    return `${Math.round(millions)}M`
  }
  if (Math.abs(num) >= 1.0e6 && Math.abs(millions) >= 10) {
    return `${millions.toFixed(1)}M`
  }
  if (Math.abs(num) >= 1.0e6) {
    return `${millions.toFixed(2)}M`
  }
  if (Math.abs(num) >= 1.0e3 && Math.abs(thousands) >= 100) {
    return `${Math.round(thousands)}K`
  }
  if (num >= 1.0e3 && thousands >= 10) {
    return `${thousands.toFixed(1)}K`
  }
  if (Math.abs(num) >= 1.0e3) {
    return `${thousands.toFixed(1)}K`
  }
  return num.toFixed();
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Updates Variable Amount
setInterval(function() {

  // Increases Varibles

  meat = meat + (drones / 10)
  drones = drones + (queens / 20)
  queens = queens + (nests / 40)
  nests = nests + (greaterQueens / 80)

  // Update Meat/Gen amounts

  document.getElementById("meat").innerHTML = "Meat: " + moneyFormat(meat);
  document.getElementById("droneAmount").innerHTML = "Drones: " + moneyFormat(drones);
  document.getElementById("queenAmount").innerHTML = "Queens: " + moneyFormat(queens);
  document.getElementById("nestAmount").innerHTML = "Nests: " + moneyFormat(nests);
  document.getElementById("greaterQueenAmount").innerHTML = "Greater Queens: " + moneyFormat(greaterQueens);

  

},100);


// Multi Buy
var buyAmount = 1;
var maxBuyAmount = false;
var oneX = document.getElementById("oneBuy");
var tenX = document.getElementById("tenBuy");
var hundredX = document.getElementById("hundredBuy");
var maxX = document.getElementById("maxBuy");

function oneTimesBuy() {
  buyAmount = 1;
  maxBuyAmount = false;
  document.getElementById("oneBuy").style.backgroundColor = "rgb(130, 226, 250)";
  document.getElementById("tenBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("hundredBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("maxBuy").style.backgroundColor = "rgb(20, 162, 197)";
}

function tenTimesBuy() {
  buyAmount = 10;
  maxBuyAmount = false;
  document.getElementById("oneBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("tenBuy").style.backgroundColor = "rgb(130, 226, 250)";
  document.getElementById("hundredBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("maxBuy").style.backgroundColor = "rgb(20, 162, 197)";
}

function hundredTimesBuy() {
  buyAmount = 100;
  maxBuyAmount = false;
  document.getElementById("oneBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("tenBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("hundredBuy").style.backgroundColor = "rgb(130, 226, 250)";
  document.getElementById("maxBuy").style.backgroundColor = "rgb(20, 162, 197)";
}

function maxBuys() {
  buyAmount = 1;
  maxBuyAmount = true;
  document.getElementById("oneBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("tenBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("hundredBuy").style.backgroundColor = "rgb(20, 162, 197)";
  document.getElementById("maxBuy").style.backgroundColor = "rgb(130, 226, 250)";
}

// buy gens

function buyDrone() {
  if (meat >= (buyAmount * 10)) {
    if (maxBuyAmount == true) {
      unitAmount = Math.floor(meat / 10);
      drones = drones + unitAmount;
      meat = meat - (unitAmount * 10);
      
    } else {
      meat = meat - (buyAmount * 10);
      drones = drones + buyAmount;
    }
    sleep(1000)
  } else {
    document.getElementById("gen1Cost").innerHTML = "Not Enough Meat";
    sleep(1000).then(() => {document.getElementById("gen1Cost").innerHTML = "Drone cost 10 Meat"});
    
  }
}

function buyQueen() {
  if (drones >= (buyAmount * 100)) {
    if (maxBuyAmount == true) {
      unitAmount = Math.floor(drones / 100);
      queens = queens + unitAmount;
      drones = drones - (unitAmount * 100);
      
    } else {
      drones = drones - (buyAmount * 100);
      queens = queens + buyAmount;
    }

    sleep(1000)
  } else {
    document.getElementById("gen2Cost").innerHTML = "Not Enough Drones";
    sleep(1000).then(() => {document.getElementById("gen2Cost").innerHTML = "Queen cost 100 Drones"});
    
  }
}

function buyNest() {
  if (queens >= (buyAmount * 1000)) {
    if (maxBuyAmount == true) {
      unitAmount = Math.floor(queens / 1000);
      nests = nests + unitAmount;
      queens = queens - (unitAmount * 1000);
      
    } else {
      queens = queens - (buyAmount * 1000);
      nests = nests + buyAmount;
    }
    sleep(1000)
  } else {
    document.getElementById("gen3Cost").innerHTML = "Not Enough Queens";
    sleep(1000).then(() => {document.getElementById("gen3Cost").innerHTML = "Nest cost 1000 Queens"});
    
  }
}

function buyGreaterQueen() {
  if (nests >= (buyAmount * 10000)) {
    if (maxBuyAmount == true) {
      unitAmount = Math.floor(nests / 10000);
      greaterQueens = greaterQueens + unitAmount;
      nests = nests - (unitAmount * 10000);
      
    } else {
      nests = nests - (buyAmount * 10000);
      greaterQueens = greaterQueens + buyAmount;
    }
    sleep(1000)
  } else {
    document.getElementById("gen4Cost").innerHTML = "Not Enough Nests";
    sleep(1000).then(() => {document.getElementById("gen4Cost").innerHTML = "Nest cost 10000 Greater Queens"});
    
  }
}

// tabs
var currentTab = "mainTab";

function openSettings() {
  var sT = document.getElementById("settingsTab");
  var mT = document.getElementById("mainTab");
  var aT = document.getElementById("adminTab");

  if (currentTab != "settingsTab") {
    sT.style.display = "block";
    mT.style.display = "none";
    aT.style.display = "none";
    currentTab = "settingsTab";

  }
}

function openMain() {
  var sT = document.getElementById("settingsTab");
  var mT = document.getElementById("mainTab");
  var aT = document.getElementById("adminTab");

  if (currentTab != "mainTab") {
    mT.style.display = "block";
    sT.style.display = "none";
    aT.style.display = "none";
    currentTab = "mainTab";

  }
}

function openAdmin() {
  var sT = document.getElementById("settingsTab");
  var mT = document.getElementById("mainTab");
  var aT = document.getElementById("adminTab");

  if (currentTab != "adminTab") {
    aT.style.display = "block";
    sT.style.display = "none";
    mT.style.display = "none";
    currentTab = "adminTab";

  }
}


// settings options
var bodyBackgroundColor = "LightBlue"

function changeBackground() {
  var x = document.body
  if (bodyBackgroundColor == "LightBlue") {
    x.style.backgroundColor = "Red";
    bodyBackgroundColor = "Red"

  } else if (bodyBackgroundColor == "Red") {
    x.style.backgroundColor = "rgb(121, 213, 243)";
    bodyBackgroundColor = "LightBlue"
  }
}

// admin stuff

function givetroop(troopType) {
  if (troopType.id == "giveMeat") {
    var amountGiven = troopType.value;
    meat = meat + parseInt(amountGiven);
  } else if (troopType.id == "giveDrone") {
    var amountGiven = troopType.value;
    drones = drones + parseInt(amountGiven);
  } else if (troopType.id == "giveQueen") {
    var amountGiven = troopType.value;
    queens = queens + parseInt(amountGiven);
  } else if (troopType.id == "giveNest") {
    var amountGiven = troopType.value;
    nests = nests + parseInt(amountGiven);
  } else if (troopType.id == "giveGQueen") {
    var amountGiven = troopType.value;
    greaterQueens = greaterQueens + parseInt(amountGiven);
  }
}
