'use strict';
const soundIcon = document.getElementById("sound-icon");
const soundUrl = "js/sounds/mashup spacetoon songs -.mp3";
const audio = new Audio(soundUrl);
let isPlaying = false;

soundIcon.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});

let userInput = [];
function Input ( yourname, chname,quote,image) {
  this.yourname = yourname;
  this.chname = chname;
  this.quote = quote;
  this.image = image;
  userInput.push(this);
}

Input.prototype.render = function () {

    let forminf = document.getElementsByClassName("quotes")[0];

    let jsonArray = window.localStorage.getItem("characters");
    // convert the JSON to JS
    let objArray = JSON.parse(jsonArray);
    for (let i=0; i<objArray.length; i++) {
      let information = document.createElement("div");
      information.classList.add("cards"); 
      forminf.appendChild(information);
  
  
  
      let yourname = document.createElement("p");
      yourname.textContent = this.yourname;
      yourname.classList.add("input-field");
      yourname.style.color = "white";
      information.appendChild(yourname);
     
      
      let chname = document.createElement("p")
      this.chname.classList.add("book");
      chname.textContent = this.chname;
      chname.style.marginBottom = "10px";
      chname.style.color = "white";
      information.appendChild(chname);
      
      let quote = document.createElement("h3")
      quote.textContent = this.quote;
      this.quote.classList.add("book");
      quote.style.marginBottom = "10px";
      quote.style.color = "white";
      information.appendChild(quote);
  
      let imageContainer = document.createElement("div");
      this.imageContainer.classList.add("book");
      cards.appendChild(imageContainer);
  
      let image = document.createElement("img")
      image.setAttribute('src', this.image);
      image.style.width = "200px"; 
      image.style.height = "200px"; 
      information.appendChild(image);
    }
   
 
    
}

function handler(e){
    e.preventDefault();
    let yourname = e.target.yourname.value;
    let chname = e.target.chname.value;
    let quote = e.target.quote.value;
    let image = e.target.image.value; 


    const MAXLENGTH = 100; 

    if (quote.length > MAXLENGTH) {
      alert("Quote is too long ,Please limit it to " + MAXLENGTH + " characters.");
      return;
    }
  
   
    let forminf = new Input( yourname,chname,quote,image);
    console.log(userInput);
    storeIntoLocalStorage();
    forminf.render();
    
    
    console.log(yourname,chname,quote);
};

function storeIntoLocalStorage() {
  console.log("The Array drinsk added by user JS format => ", userInput);
  // convert JS to JSON
  let jsonObjArray = JSON.stringify(userInput);
  window.localStorage.setItem("characters", jsonObjArray);
}

let saveValues = document.getElementById("character-form");
saveValues.addEventListener('submit', handler);

