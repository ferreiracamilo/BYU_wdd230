const weatherComponent = document.querySelector("#weather-component");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.90&lon=-56.17&appid=7abfe5a0778a5c6156b12649d78f6fd4";

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
    const span = document.createElement("span");
    let desc = data.weather[0].description;

    const img = document.createElement("img");
    const iconsrc = "https://openweathermap.org/img/wn/"+ data.weather[0].icon  + ".png";
    img.setAttribute("src", iconsrc);
    img.setAttribute("alt", desc);

    
    span.textContent = `${data.main.temp} ° F - ${desc}`;

    weatherComponent.append(img);
    weatherComponent.append(span);
    
}

apiFetch();