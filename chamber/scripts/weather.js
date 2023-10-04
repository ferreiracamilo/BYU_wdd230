// Function to extract query parameters from the URL
function getQueryParam(url, param) {
    const queryParams = new URL(url).searchParams;
    return queryParams.get(param);
}

function fetchWeather() {
    return new Promise((resolve, reject) => {
      // Check if geolocation is available in the browser
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async function(position) {
            try {
              // Get latitude and longitude
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
  
              // Create a URL for reverse geocoding
              const geocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;
  
              // Fetch the city data
              const response = await fetch(geocodeUrl);
              const geocodeData = await response.json();
              
              // Extract the city name
              const city = geocodeData.address.city || geocodeData.address.town || geocodeData.address.village;
  
              // Get the current URL
              const currentURL = window.location.href;
              //Extract api key from URL
              const apiKey = getQueryParam(currentURL, 'weather_api_key');
              // Check if apiKey is not null or empty before using it
                if (apiKey) {
                    // Use apiKey in your API request or for other purposes
                    console.log('API Key:', apiKey);
                } else {
                    console.error('API Key not found in the URL');
                }

              const apiUrl = `https://open-weather13.p.rapidapi.com/city/${city}`;
              const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': apiKey,
                  'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
                },
              };
  
              const weatherResponse = await fetch(apiUrl, options);
              const weatherData = await weatherResponse.json();
  
              // Extract the desired weather data
              const weatherInfo = {
                description: weatherData.weather[0].description,
                temp: weatherData.main.temp,
                feels_like: weatherData.main.feels_like,
                temp_min: weatherData.main.temp_min,
                temp_max: weatherData.main.temp_max,
                city: weatherData.name
              };
  
              resolve(weatherInfo);
            } catch (error) {
              reject(error);
            }
          },
          function(error) {
            reject(error);
          }
        );
      } else {
        reject("Geolocation is not available in this browser.");
      }
    });
  }
  
  // Usage: Call fetchWeather to get weather data and load it into the existing ul
  fetchWeather()
    .then(weatherData => {
      // Get a reference to the existing ul element with the id "weatherList"
      const ul = document.getElementById("weatherList");
  
      // Create list items for each piece of weather data and load them into the existing ul
      const tempCityItem = document.createElement("li");
      tempCityItem.textContent = `City: ${weatherData.city}`;
      ul.appendChild(tempCityItem);

      const weatherDescriptionItem = document.createElement("li");
      weatherDescriptionItem.textContent = `Description: ${weatherData.description}`;
      ul.appendChild(weatherDescriptionItem);
  
      const temperatureItem = document.createElement("li");
      temperatureItem.textContent = `Temperature: ${weatherData.temp} F`;
      ul.appendChild(temperatureItem);
  
      const feelsLikeItem = document.createElement("li");
      feelsLikeItem.textContent = `Feels Like: ${weatherData.feels_like} F`;
      ul.appendChild(feelsLikeItem);
  
      const tempMinItem = document.createElement("li");
      tempMinItem.textContent = `Min Temperature: ${weatherData.temp_min} F`;
      ul.appendChild(tempMinItem);
  
      const tempMaxItem = document.createElement("li");
      tempMaxItem.textContent = `Max Temperature: ${weatherData.temp_max} F`;
      ul.appendChild(tempMaxItem);
  
      console.log("Weather Data:", weatherData);
    })
    .catch(error => {
        // Get a reference to the existing ul element with the id "weatherList"
        const ul = document.getElementById("weatherList");

        // Create list items for each piece of weather data and load them into the existing ul
        const weatherDescriptionItem = document.createElement("li");
        weatherDescriptionItem.textContent = `Weather API may be unavailable for your city or reached to its limit`;
        ul.appendChild(weatherDescriptionItem);

        console.error("An error occurred: Weather API Key is not updated and/or city is not available for service and/or reach to its limit", error);
    });