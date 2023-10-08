/*
-------------------------------------------
    DYNAMIC VALUE FOR HIDDEN TIMESTAMP
-------------------------------------------
*/
// JavaScript to set the timestamp in the hidden field
document.getElementById('timestampField').value = new Date().toISOString();


/*
-------------------------------------------
    DYNAMIC TEXT FOR MEMBERSHIP BENEFITS
-------------------------------------------
*/

// Benefits for Nonprofit Membership
const nonprofitBenefits = [
    "Networking opportunities with other nonprofit organizations.",
    "Access to chamber events and workshops at a discounted rate.",
    "Inclusion in the chamber's nonprofit directory.",
    "Advocacy and support for nonprofit initiatives and causes.",
    "Visibility within the local community through chamber promotions."
];

// Benefits for Bronze Membership
const bronzeBenefits = [
    "Business listing in the chamber's online directory.",
    "Participation in chamber networking events.",
    "Access to educational seminars and workshops.",
    "Member-to-member discounts and promotions.",
    "Opportunities to sponsor chamber events."
];

// Benefits for Silver Membership
const silverBenefits = [
    "Enhanced business listing with a premium profile in the chamber's directory.",
    "Priority access to networking events and VIP invitations.",
    "Inclusion in the chamber's marketing campaigns.",
    "Access to business advocacy and government affairs support.",
    "Participation in industry-specific committees and task forces."
];

// Benefits for Gold Membership
const goldBenefits = [
    "Premium exposure with featured placement in the chamber's directory.",
    "Exclusive access to high-level networking events and executive roundtables.",
    "Recognition as a top-tier sponsor of chamber initiatives and events.",
    "Access to personalized business development services.",
    "Strategic partnership opportunities with other chamber members."
];

// Get the form elements and dynamic text element
const form = document.querySelector('.form');
const dynamicText = document.getElementById('dynamicText');

// Add event listener to the form to listen for radio button changes
form.addEventListener('change', function() {
    // Get the selected radio button value
    const selectedMembership = document.querySelector('input[name="membership"]:checked').value;

    // Create an h3 element
    const h2 = document.createElement('h2');
    h2.textContent = 'Membership Benefits:';

    // Create a ul element
    const ul = document.createElement('ul');

    // Create li elements for benefits based on the selected radio button
    if (selectedMembership === 'nonprofit') {
        const benefits = nonprofitBenefits;
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            ul.appendChild(li);
        });
    } else if (selectedMembership === 'bronze') {
        const benefits = bronzeBenefits;
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            ul.appendChild(li);
        });
    } else if (selectedMembership === 'silver') {
        const benefits = silverBenefits;
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            ul.appendChild(li);
        });
    } else{
        const benefits = goldBenefits;
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            ul.appendChild(li);
        });
    }

    // Clear the previous content and add the new h3 and ul
    dynamicText.innerHTML = '';
    dynamicText.appendChild(h2);
    dynamicText.appendChild(ul);
});