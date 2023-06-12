'use strict';
const soundIcon = document.getElementById("sound-icon");
const soundUrl = "js/sounds/mashup spacetoon songs -.mp3";
const audio = new Audio(soundUrl);
soundIcon.addEventListener("click", () => {
  audio.play();
});
let UserInputs=[]
function Input ( yourname, chname,quote,image) {
  this.yourname = yourname;
  this.chname = chname;
  this.quote = quote;
  this.image = image;
  UserInputs.push(this);
}

 function render () {

    let forminf = document.getElementsByClassName("quotes")[0];
    forminf.innerHTML=``;
    // read the json Array From LS 
  //let jsonArray = window.localStorage.getItem("characters");
  // convert the JSON to JS 
 // console.log("this is"+jsonArray);
  //let objArray = JSON.parse(jsonArray);
    for (let i = 0; i < UserInputs.length; i++) {
    let information = document.createElement("div");
    information.classList.add("cards"); 
    forminf.appendChild(information);



    let yourname = document.createElement("p");
    yourname.textContent = UserInputs[i].yourname;
    yourname.classList.add("yourName");
    yourname.classList.add("input-field");
    yourname.style.color = "white";
    information.appendChild(yourname);
    
    let chname = document.createElement("p")
    chname.classList.add("theName");
    chname.textContent = UserInputs[i].chname;
    chname.style.color = "white";
    information.appendChild(chname);

    
    let quote = document.createElement("h3")
    quote.classList.add("theImage");

    quote.textContent = UserInputs[i].quote;
    
  quote.style.color = "white";
    information.appendChild(quote);

    // let imageContainer = document.createElement("div");
    // information.appendChild(imageContainer);

    let image = document.createElement("img")
    image.setAttribute('src', UserInputs[i].image);
    image.style.width = "300px"; 
    image.style.height = "380px"; 
    image.classList.add("charactImage");
    information.appendChild(image);
 
    
}}
let saveValues = document.getElementById("character-form");
saveValues.addEventListener('submit', handler);  


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
  
   
 new Input( yourname,chname,quote,image);
    
    storeIntoLocalStorage();
  
    render();

 
};


function storeIntoLocalStorage() {
 
  // convert JS to JSON 
  let jsonObjArray = JSON.stringify(UserInputs);
  window.localStorage.setItem("characters", jsonObjArray);
}


function readFromLocalStorage() {
  // read the json Array From LS 
  let jsonArray = window.localStorage.getItem("characters");
  // convert the JSON to JS 
  let objArray = JSON.parse(jsonArray);
  console.log("Array after read From LS before the re-intantiation => ", objArray);

  if (objArray == null) {
      console.log("The LS is Empty");
  } else {
      

      for(let i = 0 ; i< objArray.length; i++){
      new Input (objArray[i].yourname , objArray[i].chname , objArray[i].quote , objArray[i].image);

      }
     

  }


}


readFromLocalStorage();

var something = (function() {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          render();
      }
  };
})();
something()
