
var section = document.querySelector('section');
    
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townSummary = request.response;
   
  threeCities(townSummary);
}


function threeCities(jsonObj) {
    var towns = jsonObj['towns'];
        
    for (var i = 0; i < towns.length; i++) {
      if (i===0||i===2||i===3||i===6) {continue;}
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myImg1 = document.createElement('img');
      
  
      myH2.textContent = towns[i].name;
      myPara1.textContent = towns[i].motto;
      myPara2.textContent = 'Year Founded:' + towns[i].yearFounded;
      myPara3.textContent = 'Current Population:' + towns[i].currentPopulation;
      myPara4.textContent = 'Average Rainfall:' + towns[i].averageRainfall;   

      
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myImg1);
  
      section.appendChild(myArticle);
      if (i===1) myImg1.src= "images/sodasprings"
      myImg1.setAttribute('alt','opps no photo');
      if (i===4) myImg1.src="images/preston.jpg"
      myImg1.setAttribute('alt','opps no photo');
      if (i===5) myImg1.src="images/fishhaven"
      myImg1.setAttribute('alt','opps no photo');
    }
  }


