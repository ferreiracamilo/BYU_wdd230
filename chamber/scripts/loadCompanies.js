const url = "https://ferreiracamilo.github.io/wdd230/chamber/data/members.json";

const membersZone = document.querySelector('.grid');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data retreival
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const icon = document.createElement("img");
        const name = document.createElement("h3");
        const membership = document.createElement("p");
        const website = document.createElement("p");
        const address = document.createElement("p");
        const opening = document.createElement("p");

        // Build the image icon by setting all the relevant attributes
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', "Icon of " + member.name);
        icon.setAttribute('loading', 'lazy');

        // Set teh value of full name h2
        name.textContent = member.name;

        membership.textContent = "Membership: " + member.membership;

        website.textContent = "Website: " + member.website;

        address.textContent = "Address: " + member.address;

        opening.textContent = "Opening date: " + member.opening;

        // Append the section(card) with the created elements
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(opening);
        
        membersZone.appendChild(card);
    });
}

getMembersData();