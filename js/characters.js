'use strict';

let dropDown=document.getElementById("subMenu");
let currentUserName=localStorage.getItem("userEmail");
if (currentUserName==null){
    dropDown.innerHTML=` <div class="sub-menu">
    <div class="user-info">
        <img
            src="https://th.bing.com/th/id/R.bc8abf4164cb9ae12872dd77956f3753?rik=gno2jmkaAlh1yw&riu=http%3a%2f%2fbonniesomerville.nz%2fwp-content%2fuploads%2f2015%2f08%2fprofile-icon.png&ehk=RFa%2b%2b54P%2b29B%2fafZdZZ7xGNy16dQxFLBv8Q7Sh9xyVY%3d&risl=&pid=ImgRaw&r=0">
        <h2 id="guest">guest</h2>
    </div>
    <hr>

    <a href="profile.html" class="sub-menu-link"><i class="fas fa-user"></i>
        <p>Profile</p>
        <span>></span>
    </a>

    <a href="./sign-in.html" class="sub-menu-link"><i class="fa-solid fa-right-to-bracket" style="color: #ffffff;"></i>
        <p>Login</p>
        <span>></span>
    </a>

</div>`
} else {
    dropDown.innerHTML=` <div class="sub-menu">
    <div class="user-info">
        <img
            src="https://th.bing.com/th/id/R.bc8abf4164cb9ae12872dd77956f3753?rik=gno2jmkaAlh1yw&riu=http%3a%2f%2fbonniesomerville.nz%2fwp-content%2fuploads%2f2015%2f08%2fprofile-icon.png&ehk=RFa%2b%2b54P%2b29B%2fafZdZZ7xGNy16dQxFLBv8Q7Sh9xyVY%3d&risl=&pid=ImgRaw&r=0">
        <h2 id="guest">${currentUserName}</h2>
    </div>
    <hr>

    <a href="profile.html" class="sub-menu-link"><i class="fas fa-user"></i>
        <p>Profile</p>
        <span>></span>
    </a>

    <a href="./index.html" class="sub-menu-link" onclick="clearUser()"><i class="fa-solid fa-right-to-bracket" style="color: #ffffff;"></i>
        <p>Logout</p> 
        <span>></span>
    </a>

</div>` 
}

function clearUser(){
    localStorage.removeItem('userEmail');
}

const soundIcon = document.getElementById("sound-icon");
const soundUrl = "assets/song/mashup spacetoon songs -.mp3";
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
   
    for (let i = 0; i < UserInputs.length; i++) {
    let information = document.createElement("div");
    information.classList.add("cards"); 
    forminf.appendChild(information);

    let yourname = document.createElement("p");
    yourname.textContent ="Name: " + UserInputs[i].yourname;
    yourname.classList.add("yourName");
    yourname.classList.add("input-field");
    yourname.style.color = "white";
    information.appendChild(yourname);
    
    let chname = document.createElement("p")
    chname.classList.add("theName");
    chname.textContent =" Character name: " + UserInputs[i].chname;
    chname.style.color = "white";
    information.appendChild(chname);

    
    let quote = document.createElement("p")
    quote.classList.add("theImage");

    quote.textContent = '"' + UserInputs[i].quote + '"';
    
  quote.style.color = "white";
    information.appendChild(quote);


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
 
  let jsonObjArray = JSON.stringify(UserInputs);
  window.localStorage.setItem("characters", jsonObjArray);
}

function readFromLocalStorage() {
  
  let jsonArray = window.localStorage.getItem("characters");
 
  let objArray = JSON.parse(jsonArray);


  if (objArray == null) {

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


let userName=window.localStorage.getItem('userEmail')?? "Guest1001";
let userNamediv=document.getElementById("nameUser");
userNamediv.innerHTML=userName;
