// Input - get windchill
let x = document.getElementById('windchill').innerHTML;

//Processing - calculate windchill
let result = 35.74 + 0.6215(t) - 35.75(s)^0.16 + 0.4275(s)^16;
    t=tempature;
    s=windspeed; 

//Outpull - show windchill
document.getElementById('output') = result