'use strict';

let currentUser;
// constructor to create users objects
let userEmail = [];
function User(userName) {

    this.userName = userName;

    userEmail.push(this);
}

// render method
User.prototype.render = function () {
}

// handler method to get data from user form
function handler(e) {

    e.preventDefault();
    let userName = e.target.user.value;
    let newUser = new User(userName);
    newUser.render();
    e.target.reset();

    //local storage
    sessionStorage.setItem('userName', userName);
    window.localStorage.setItem('userEmail', userName);
    console.log(Movies[i].Id)
    console.log(`welcome ${currentUser}`)
};

let submitUserData = document.getElementById('userForm');
submitUserData.addEventListener('submit', handler)



document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    window.location.href = "index.html";
  });
