var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var nam = document.querySelector('.name1');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

document.querySelector('.button').addEventListener('click', fet);

document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        fet();
    }
});

var fet = function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=132cdced319af009f4ad6d49cef24938')
    //fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02 ')
    .then(response=> response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var temp1 = (tempValue -273);
        nam.innerHTML = nameValue;
        temp.innerHTML = Math.floor(temp1)+" C";
        desc.innerHTML = descValue;
    })
    
.catch(err => alert("Wrong city"));

}