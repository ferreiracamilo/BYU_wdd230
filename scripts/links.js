const baseURL = "https://ferreiracamilo.github.io/wdd230/";
const linksURL = "https://ferreiracamilo.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks){
    const learning_activities = document.querySelector('#learning_activities');
    // Week 01: Layout | Media Query | JSPen
    weeks.forEach((week) => {
        const li = document.createElement("li");
        console.log("Este es mi week de obj " + weekObj.week);
        // li.textContent = weekObj.week + ": ";
        li.textContent = `${weekObj.week}:`;
        for (let i = 0; i < weekObj.links.length; i++) {
            let a = document.createElement("a");
            let urlLink = weekObj.links[i].url;
            let titleLink = weekObj.links[i].title;
            a.setAttribute("href",urlLink);
            if(i != weekObj.links.length-1){
                a.textContent = ` ${titleLink} |`;
            }else{
                a.textContent = ` ${titleLink}`;
            }
            li.append(a);
        }
        learning_activities.appendChild(li);
    });
}

  
getLinks();