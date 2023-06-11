var movieid = sessionStorage.getItem("movieid");
console.log(movieid);

function find(id){

   let name=document.getElementById('name') ;
   let type =document.getElementById('type');
   let desc=document.getElementById('desc')
   List = JSON.parse(localStorage.getItem('movies')) ?? []
   
List.forEach(function (value){
   if(value.Id == id){
    document.getElementById("back-image").src =value.image;

       console.log(value.Name);
       name.innerHTML=value.Name
       type.innerHTML=value.category
       desc.innerHTML=value.desc

   
    
   }
})
}
find(movieid)




