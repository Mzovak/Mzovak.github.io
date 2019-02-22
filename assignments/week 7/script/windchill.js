// Input - get windchill
let x = document.getElementById('windchill').innerHTML;
var temp = document.getElementById('highTemp').innerHTML;
var windspeed = document.getElementById('windspeed').innerHTML;

//Processing - calculate windchill
let result = 35.74 + 0.6215('highTemp') - 35.75('windspeed')^0.16 + 0.4275('windspeed')^16;
   

//Outpull - show windchill
document.getElementById('output') = result