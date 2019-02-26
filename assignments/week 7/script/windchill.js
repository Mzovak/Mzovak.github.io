// Input - get windchill

var temp = parseInt(document.getElementById('highTemp').innerHTML);
var speed = parseInt(document.getElementById('windspeed').innerHTML);

//Processing - calculate windchill
var windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
   

//Outpull - show windchill
windChill = Math.round(windChill);
document.getElementById("windchill").innerHTML = windchill;