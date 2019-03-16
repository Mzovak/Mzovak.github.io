let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=22d3073ac0bc46c0166da31b57c37655&units=imperial';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();