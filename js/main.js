const search = document.querySelector(".search img");
const input = document.querySelector("input");
const weather = document.querySelector(".weather");
const heat = document.querySelector(".heat");
const imgHum = document.querySelector(".humidity .img");
const imgWin = document.querySelector(".wind .img");
const infoHumidity = document.querySelector(".humidity .info");
const infoWind = document.querySelector(".wind .info");
const information = document.querySelector(".information");
const img = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const apiKey = 'e5ac763d3bbf0e82e96b050f0fabc2c9';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
search.addEventListener("click",function(){
if(input.value != ''){
    let api = apiUrl + input.value;
    fetch(api + `&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        img.src = `images/${data.weather[0].main}.png`;
        weather.appendChild(img);
        img2.src = 'images/humidity.png';
        img3.src = 'images/wind.png';
        imgHum.appendChild(img2);
        imgWin.appendChild(img3);
        heat.innerHTML = `<h3>${parseInt(data.main.temp)}°C</h3>
                            <p>${data.name}</p>`;
        infoHumidity.innerHTML = `<p>${data.main.humidity}%</p>
                                    <p>Humidity</p>`;
        infoWind.innerHTML = `<p>${data.wind.speed}Km/h</p>
                                <p>Wind Speed</p>`;
        input.value = '';
        information.classList.add("done");
    })
}
})

