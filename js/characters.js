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

function Input ( yourname, chname,quote,image) {
  this.yourname = yourname;
  this.chname = chname;
  this.quote = quote;
  this.image = image;

}

Input.prototype.render = function () {

    let forminf = document.getElementsByClassName("quotes")[0];

    let information = document.createElement("div");
    information.classList.add("cards"); 
    forminf.appendChild(information);



    let yourname = document.createElement("p");
    yourname.textContent = this.yourname;
    yourname.classList.add("input-field");
    yourname.style.color = "white";
    information.appendChild(yourname);
    
    let chname = document.createElement("p")
    chname.textContent = this.chname;
    chname.style.color = "white";
    information.appendChild(chname);
    
    let quote = document.createElement("h3")
    quote.textContent = this.quote;
    quote.style.color = "white";
    information.appendChild(quote);

    // let imageContainer = document.createElement("div");
    // information.appendChild(imageContainer);

    let image = document.createElement("img")
    image.setAttribute('src', this.image);
    image.style.width = "200px"; 
    image.style.height = "200px"; 
    information.appendChild(image);
 
    
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
    forminf.render();
    
    
    console.log(yourname,chname,quote);
};

let saveValues = document.getElementById("character-form");
saveValues.addEventListener('submit', handler);

