let moviesArr=[]
function movies(Id,Name,desc,category,type,image,backImage) {
    this.Id=Id;
    this.Name = Name;
    this.desc = desc;
    this.category=category
    this.type = type;
    this.image=image;
    this.backImage=backImage;
    moviesArr.push(this)
    
  }


  let amime1=new movies(1,"naruto","gggggggggggggggggggggggggggg","drama","anime","./assets/charcter.png","");
  let amime2=new movies(2,"loffi","gggggggggggggggggggggggggggg","drama","anime","./assets/5.png","");
  let amime3=new movies(3,"batmaan","gggggggggggggggggggggggggggg","drama","anime","./assets/3.png","");
  let amime4=new movies(4,"maskman","gggggggggggggggggggggggggggg","drama","anime","./assets/6.png","");
  let amime5=new movies(5,"naruto","gggggggggggggggggggggggggggg","drama","anime","./assets/charcter.png","");
  let amime6=new movies(6,"naruto","gggggggggggggggggggggggggggg","drama","anime","./assets/charcter.png","");


    console.log("The Array drinsk added by user JS format => ", moviesArr);
    // convert JS to JSON 
    let jsonObjArray = JSON.stringify(moviesArr);
    window.localStorage.setItem("movies", jsonObjArray);



    // read the json Array From LS 
    let jsonArray = window.localStorage.getItem("movies");
    // convert the JSON to JS 
    let objArray = JSON.parse(jsonArray);
    console.log("Array after read From LS before the re-intantiation => ", objArray);

    if (objArray == null) {
        console.log("The LS is Empty");
    } else {
        // drinksArray = objArray;
        // console.log("Global Drinks Array => ", drinksArray);

        // Re-instantiation >> to get back the methods and prototype  

        for(let i = 0 ; i< objArray.length; i++){
            let movie = new movies(objArray[i].Id , objArray[i].desc , objArray[i].category , objArray[i].type, objArray[i].image);
      
        }
        console.log("Global movies Array After the re-instantiation => ", moviesArr);

    }


 


function openme(id) {
    var movieid = id;
    
sessionStorage.setItem("movieid", movieid);

    window.open("details.html","_self");
  }

const FavIdArr=[];
function addToFav(id) {

    if(!(FavIdArr.includes(id))){
        FavIdArr.push(id);
    }
   
let local=localStorage.setItem("favId", JSON.stringify(FavIdArr));

  }

function allData(){
            
  
    let jsonArray = window.localStorage.getItem("movies");
    // convert the JSON to JS 
    let objArray = JSON.parse(jsonArray);

    for(let i = 0 ; i< objArray.length; i++){
       
       
        var wrapper = document.getElementById('wrapper')
        // if(value.isComplete == 0){
            wrapper.innerHTML += `
            <div class="card">
            <img src=${objArray[i].image} alt="anime1">
            <div class="info">
                <h1>${objArray[i].Name}</h1>
                <p>${objArray[i].desc} </p>
                <a href="#" class="btn" onclick="openme(${objArray[i].Id})">See Trailer</a>
                <button class="btn-favorite" onclick="addToFav(${objArray[i].Id})"><i class="fa-regular fa-heart" ></i></button>
            </div>
        </div>`
        // }
    
    }
    
    
}
allData()




