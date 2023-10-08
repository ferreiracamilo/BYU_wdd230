const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// https://api.openweathermap.org/data/3.0/onecall/weather?lat=$lat&lon=$lon&appid=$api_key
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=7abfe5a0778a5c6156b12649d78f6fd4";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.error();
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = "https://openweathermap.org/img/wn/"+ data.weather[0].icon  + ".png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`; // ` char will let me use the $ to replace values
}

apiFetch();