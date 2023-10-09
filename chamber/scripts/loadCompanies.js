const url = "https://ferreiracamilo.github.io/wdd230/chamber/data/members.json";

const members = document.querySelector('.grid');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateBirth = document.createElement("p");
        const placeBirth = document.createElement("p");
        const portrait = document.createElement("img");

        //Save the first name and last name together to reduce redudant code
        const fullNameStr = prophet.name+ " " + prophet.lastname;

        // Set teh value of full name h2
        fullName.textContent = fullNameStr;

        //Set date of birth
        dateBirth.textContent = "Date of birth: " + prophet.birthdate;

        //Set place of birth
        placeBirth.textContent = "Place of birth: " + prophet.birthplace;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', "Portrait of " + fullNameStr);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();