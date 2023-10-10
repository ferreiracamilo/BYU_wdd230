const url = "https://ferreiracamilo.github.io/wdd230/chamber/data/members.json";

const membersZone = document.querySelector('.grid');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data retreival
    displayMembers(data.members);
}

const displayMembers = (members) => {

    //Create a dummy card to show only in list mode to work as a header
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const membership = document.createElement("p");
    const website = document.createElement("p");
    const address = document.createElement("p");
    const opening = document.createElement("p");

    name.textContent = "Org Name";
    membership.textContent = "Membership";
    website.textContent = "Website";
    address.textContent = "Address";
    opening.textContent = "Opening date";

    card.appendChild(name);
    card.appendChild(membership);
    card.appendChild(address);
    card.appendChild(opening);
    card.appendChild(website);

    card.setAttribute("class","dummy-header");
    membersZone.appendChild(card);
    //Create a dummy card to show only in list mode to work as a header

    members.forEach((member) => {
        const card = document.createElement("section");
        const icon = document.createElement("img");
        const name = document.createElement("h3");

        // Build the image icon by setting all the relevant attributes
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', "Icon of " + member.name);
        icon.setAttribute('loading', 'lazy');

        //Set the value of h3
        name.textContent = member.name;

        //Define spans first which then will be dissappear in fake list/table view by css
        const membership = document.createElement("p");
        const membership_span = document.createElement("span");
        membership_span.setAttribute("class","remove-span-list");
        membership_span.textContent = "Membership: ";
        const membership_span_text = document.createElement("span");
        membership_span_text.textContent = member.membership;
        membership.append(membership_span);
        membership.append(membership_span_text);

        const address = document.createElement("p");
        const address_span = document.createElement("span");
        address_span.setAttribute("class","remove-span-list");
        address_span.textContent = "Address: ";
        const address_span_text = document.createElement("span");
        address_span_text.textContent = member.address;
        address.append(address_span);
        address.append(address_span_text);

        const opening = document.createElement("p");
        const opening_span = document.createElement("span");
        opening_span.setAttribute("class","remove-span-list");
        opening_span.textContent = "Opening date: ";
        const opening_span_text = document.createElement("span");
        opening_span_text.textContent = member.opening;
        opening.append(opening_span);
        opening.append(opening_span_text)

        const website = document.createElement("p");
        const website_span = document.createElement("span");
        website_span.setAttribute("class","remove-span-list");
        website_span.textContent = "Website: ";
        const website_span_text = document.createElement("span");
        const a_website = document.createElement("a");
        a_website.setAttribute("href",member.website);
        a_website.setAttribute("target","_blank");
        a_website.textContent=member.website;
        website_span_text.appendChild(a_website);
        website.append(website_span);
        website.append(website_span_text);

        // Append the section(card) with the created elements
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(opening);
        card.appendChild(website);
        
        membersZone.appendChild(card);
    });
}

getMembersData();