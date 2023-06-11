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
    let name=document.getElementById("nameUser");
    name.innerHTML=userName;




