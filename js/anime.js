let moviesArr = []
function movies(Id, Name, desc, category, type, image, backImage,contant) {
    this.Id = Id;
    this.Name = Name;
    this.desc = desc;
    this.category = category
    this.type = type;
    this.image = image;
    this.backImage = backImage;
    this.contant = contant;
    moviesArr.push(this)

}


let amime1 = new movies(1, "Naruto", "In a village where he was rejected for unknown reasons, Naruto Uzumaki, a young ninja who seeks to become the Hokage, the leader of his village", "Action Drama Shonen", "anime", "./assets/anime-1.png", "./assets/animeb-1.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let amime2 = new movies(2, "One Piece", "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named One Piece", "Action Adventure", "anime", "./assets/anime-2.png", "./assets/anime-2b.png","https://www.youtube.com/watch?v=LHTYpWI3S6Q&pp=ygURb25lIHBpZWNlIHRyYWlsZXI%3D");
let amime3 = new movies(3, "Attack on Titan", "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.", "Action Adventure", "anime", "./assets/anime-3.png", "./assets/anime-3b.png","https://www.youtube.com/watch?v=LV-nazLVmgo&pp=ygUXYXR0YWNrIG9uIHRpdGFuIHRyYWlsZXI%3D");
let amime4 = new movies(4, "Demon Slayer", "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.", "Action Adventure", "anime", "./assets/anime-4.png", "./assets/anime-4b.png");
let amime5 = new movies(5, "Bleach", "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.", "Action Adventure", "anime", "./assets/anime-5.png", "./assets/anime-5b.png");
let amime6 = new movies(6, "Vinland Saga", "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage.", "Action Adventure", "anime", "./assets/anime-6.png", "");
let amime7 = new movies(6, "Jujutsu Kaisen", "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.", "Action Adventure", "anime", "./assets/anime-7.png", "");
let amime8 = new movies(6, "Hunter x Hunter", "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.", "Action Adventure", "anime", "./assets/anime-8.png", "");
let amime9 = new movies(6, "Parasyte", "17-year-old Shinichi Izumi is partially infected by a Parasyte, monsters that butcher and consume humans. He must learn to co-exist with the creature if he is to survive both the life of a Parasyte and a human as part monster, part person.", "Action Drama", "anime", "./assets/anime-9.png", "");

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

    for (let i = 0; i < objArray.length; i++) {
        let movie = new movies(objArray[i].Id, objArray[i].desc, objArray[i].category, objArray[i].type, objArray[i].image);

    }
    console.log("Global movies Array After the re-instantiation => ", moviesArr);

}





function openme(id) {
    var movieid = id;

    sessionStorage.setItem("movieid", movieid);

    window.open("details.html", "_self");
}

const FavIdArr = [];
function addToFav(id) {

    if (!(FavIdArr.includes(id))) {
        FavIdArr.push(id);
    }

    let local = localStorage.setItem("favId", JSON.stringify(FavIdArr));

}

function allData() {


    let jsonArray = window.localStorage.getItem("movies");
    // convert the JSON to JS 
    let objArray = JSON.parse(jsonArray);

    for (let i = 0; i < objArray.length; i++) {


        var wrapper = document.getElementById('wrapper')
        // if(value.isComplete == 0){
        wrapper.innerHTML += `
            <div class="card">
            <img src=${objArray[i].image} alt="anime1">
            <div class="info">
                <h1>${objArray[i].Name}</h1>
                <p>${objArray[i].desc} </p>
                <a href="#" class="btn" onclick="openme(${objArray[i].Id})">Show Details</a>
                <button class="btn-favorite" onclick="addToFav(${objArray[i].Id})"><i class="fa-regular fa-heart" ></i></button>
            </div>
        </div>`
        // }

    }
}
allData()




