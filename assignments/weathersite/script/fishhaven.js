//WEATHER SUMMARY

var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=22d3073ac0bc46c0166da31b57c37655&units=imperial', true);
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
weatherForcast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=22d3073ac0bc46c0166da31b57c37655&units=imperial', true);
weatherForcast.send();
weatherForcast.onload = function () {

    var weatherInfo = JSON.parse(weatherForcast.responseText);
    console.log(weatherInfo);

    //find, temp and weather for 18:00:00 each day
    //add each item to a sparate array to use for display

    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes('18:00:00')) {

            //date
            var date = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", " Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);
        
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

    document.getElementById("day1temp").innerHTML = listTemp[0];
    document.getElementById("day2temp").innerHTML = listTemp[1];
    document.getElementById("day3temp").innerHTML = listTemp[2];
    document.getElementById("day4temp").innerHTML = listTemp[3];
    document.getElementById("day5temp").innerHTML = listTemp[4];

}
//EVENTS FOR PRESTON
var aside = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];
    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Preston")) == false) {
            continue;
        }
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');
        var townEvents = data[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }
        myDiv.appendChild(myList);
        aside.appendChild(myDiv);
    }
}
