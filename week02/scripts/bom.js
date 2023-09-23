const addChapterButton = document.querySelector("button[type='submit']");
const bookInput = document.querySelector("#favchap");
const listul = document.querySelector("#list");

addChapterButton.addEventListener('click', function(){

    if(bookInput.value != ""){
        //Add li below add chapter last element
        liUL = document.createElement("li");
        liUL.textContent = bookInput.value;
        
        
        //Add button within previous li created
        deleteButton = document.createElement("BUTTON");
        buttonText = document.createTextNode("X");
        deleteButton.appendChild(buttonText);
        deleteButton.setAttribute("class", "removeInput");
        
        liUL.append(deleteButton);
        listul.appendChild(liUL);

        deleteButton.addEventListener('click', function(){
            //console.log("aca estoy");
            this.parentNode.remove();
        });
    }

    //Erase text input by user
    bookInput.value = "";
    bookInput.focus();
});

