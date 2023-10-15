const url = "https://ferreiracamilo.github.io/wdd230/chamber/data/spotlights.json";

const spotlightsZone = document.querySelector('#company-spotlights');

async function getSpotlightsData(){
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data.spotlights);
}

const displaySpotlights = (spotlights) => {
    const randomNumbers = [];

    //Pick non repeated 3 random numbers
    while (randomNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * spotlights.length); // Generates a random number from 0 to length-1
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    for (let i = 0; i < 3; i++) {
        //Iterate 3 times setting i+1 for the id expected on css and i for calling a non repeated number result from previous while
        const article = document.createElement("article");
        article.setAttribute("id","spotlight"+ (i + 1));

        const h3 = document.createElement("h3");
        h3.textContent = spotlights[randomNumbers[i]].headerLine;

        const p = document.createElement("p");
        p.textContent = spotlights[randomNumbers[i]].description;

        article.appendChild(h3);
        article.appendChild(p);
        spotlightsZone.appendChild(article);
    }
}

getSpotlightsData();