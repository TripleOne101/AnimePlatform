'use strict';

let dropDown=document.getElementById("subMenu");
let currentUserName=localStorage.getItem("userEmail");
console.log(currentUserName);
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

let Favid=window.localStorage.getItem("favId");
let FavIdArr = JSON.parse(Favid);


let ListOfMovie= window.localStorage.getItem("movies");
    // convert the JSON to JS 
    let Movies = JSON.parse(ListOfMovie);
   
    let favAnimeDiv=document.getElementById("favAnime");
    let favMovieDiv=document.getElementById("favMovie");
    for(let i = 0 ; i< Movies.length; i++){
        for(let j=0;j<FavIdArr.length;j++){
            if(FavIdArr[j]==Movies[i].Id && Movies[i].type=="anime"){
                console.log(Movies[i].Id)
                favAnimeDiv.innerHTML+=`
                <img  src="${Movies[i].image}"/>
                `;

            }else if(FavIdArr[j]==Movies[i].Id && Movies[i].type=="movie"){
                console.log(Movies[i].Id)
                favMovieDiv.innerHTML=`
                <img  src=${Movies[i].image}/>
                `

            }
        }



    }

    let userName=window.localStorage.getItem('userEmail')?? "Guest1001";
    let userNamediv=document.getElementById("nameUser");
    userNamediv.innerHTML=userName;




