// Input - get windChill

var temp = parseInt(document.getElementById('highTemp').innerHTML);
var speed = parseInt(document.getElementById('windspeed').innerHTML);

//Processing - calculate windChill
var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.round(speed, 0.16);
   

//Outpull - show windchill
windChill = Math.pow(windChill);
document.getElementById("windChill").innerHTML = windChill;