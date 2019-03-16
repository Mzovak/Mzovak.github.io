//WEATHER SUMMARY

var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=22d3073ac0bc46c0166da31b57c37655&units=imperial', true);
weatherObject.send();                                                           
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherDesc').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;

    var windchill = 35.74 + 0.6215 * weatherInfo.main.temp - 35.75 * Math.pow(weatherInfo.wind.speed, 0.16) + 0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16);
    windchill = Math.round(windchill);
    document.getElementById("windchill").innerHTML = windchill;
}

//FORCAST

var weatherForcast = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=22d3073ac0bc46c0166da31b57c37655&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherForcast.responseText);
    console.log(weatherInfo);

    //find, temp and weather for 18:00:00 each day
    //add each item to a sparate array to use for display

    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i, weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes('18:00:00')) {

            //date
            var date = new DataCue(weatherInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", " Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(temp);
        
            //temp
            var temp = weatherInfo.list[i].main.temp_max;
            var temp = Math.round(temp);
            listTemp.push(temp);

            //icon
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }

        continue;
    }
    //Display forecast date

    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];

    //Display corresponding weather icon

    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];

    //Dispaly forcasted temp

    document.getElementById("highTemp1").innerHTML = listTemp[0];
    document.getElementById("highTemp2").innerHTML = listTemp[1];
    document.getElementById("highTemp3").innerHTML = listTemp[2];
    document.getElementById("highTemp4").innerHTML = listTemp[3];
    document.getElementById("highTemp5").innerHTML = listTemp[4];

    //display current date in footer

    document.getElementById("currentdate").innerHTML = weekday[date.getDay()] + "," + date.getDate() + "," + month[date.getMonth()] + "," + date.getFullYear();
    document.getElementById("currentYear").innerHTML = date.getFullYear();
}