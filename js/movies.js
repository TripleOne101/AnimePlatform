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


let movies1 = new movies(1, "Demon Slayer", "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.", "Action Drama Shonen", "movie", "./assets/movie-1.png", "./assets/movie-1b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies2 = new movies(2, "Spirited Away", "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.", "Adventure Family", "movie", "./assets/movie-2.png", "./assets/movie-2b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies3 = new movies(3, "Wolf Children", "After her werewolf lover unexpectedly dies in an accident while hunting for food for their children, a young woman must find ways to raise the werewolf son and daughter that she had with him while keeping their trait hidden from society.", "Drama Family ", "movie", "./assets/movie-3.png", "./assets/movie-3b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies4 = new movies(4, "Grave of the Fireflies", "A young boy and his little sister struggle to survive in Japan during World War II.", "Action Drama Shonen", "movie", "./assets/movie-4.png", "./assets/movie-4b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies5 = new movies(5, "Violet Evergarden", "Violet Evergarden, a former soldier returned from war, comes to teach at a women's academy and changes a young girl's life.", "Drama Family", "movie", "./assets/movie-5.png", "./assets/movie-5b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies6 = new movies(6, "Howl's Moving Castle", "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.", "Adventure Family", "movie", "./assets/movie-6.png", "./assets/movie-6b.png","https://www.youtube.com/watch?v=QczGoCmX-pI&pp=ygUObmFydXRvIHRyYWlsZXI%3D");
let movies7 = new movies(7, "I Want to Eat Your Pancreas", "A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments.", "Drama Family", "movie", "./assets/movie-7.png", "./assets/movie-7b.png");
let movies8 = new movies(8, "A Silent Voice", "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.", "Drama ", "movie", "./assets/movie-8.png", "./assets/movie-8b.png");
let movies9 = new movies(9, "Your Name", "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.", "Drama Fantasy", "movie", "./assets/movie-9.png", "./assets/movie-9b.png");


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




