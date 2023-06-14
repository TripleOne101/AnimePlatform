var movieid = sessionStorage.getItem("movieid");
List = JSON.parse(localStorage.getItem('movies')) ?? []
const btn = document.getElementById("play");


function find(id) {

   let name = document.getElementById('name');
   let type = document.getElementById('type');
   let desc = document.getElementById('desc')

   List.forEach(function (value) {
      console.log(value)

      if (value.Id == id) {
         document.getElementById("back-image").src = value.backImage;

         name.innerHTML = value.Name;
         type.innerHTML = value.category;
         desc.innerHTML = value.desc;

         btn.addEventListener("click", function () {
            window.open(value.contant)
         });
      }


   })

   LikeThis(id)
}
find(movieid)

function LikeThis(id) {
   var card = document.getElementById('card-list')
   List.forEach(elm => {
      if (id != elm.Id) {
         card.innerHTML += `
         <div class="card" id ="likeThisAnime">
         <div class="container">
           <img src="${elm.image}" alt="Avatar" style="width:100%;">
           <button onclick="SupPlay('${elm.contant}')" class="center">Play</button>
         </div>
         <div class="card-details">
           <h4><b>Demon Slayer</b></h4>
           <img src="/assets/Rating.png" />
         </div>
       </div>`
      }
   });
}

function SupPlay(url){
   window.open(url)
}