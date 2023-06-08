'use strict';


// constructor to create users objects
function User(userName){

    this.userName = userName;
  
}

// render method
User.prototype.render = function() {

    console.log(this.userName);
    

}

// handler method to get data from user form
function handler(e){

    e.preventDefault();
    
    let userName = e.target.userName.value;

    let newUser = new User(userName);
    
    newUser.render();

    e.target.reset();
};

let submitUserData = document.getElementById('userForm');
submitUserData.addEventListener('submit', handler)

