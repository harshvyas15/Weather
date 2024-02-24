var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn'); // Changed variable name to 'submitBtn'
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apiKey = "741ce88e35c5e5bf4606fb0c53ac00bc";

function convertion(val){
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name'];
            var weatherDesc = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameVal}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${weatherDesc}</span>`;
            wind.innerHTML = `Wind speed: <span>${windSpeed} Km/h</span>`;
        })
        .catch(err => alert('You entered a wrong city name.'));
});
