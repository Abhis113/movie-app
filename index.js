var moviescollection = [
    {
      poster : "https://im.rediff.com/movies/2022/jan/18bollywood2.jpg?w=670&h=900",
      moviesName: "BRAHMASTRA",
      releaseDate: "05-JUNE-2022",
      imdbRating : 9.6,
    },

    {
      poster : "https://upload.wikimedia.org/wikipedia/en/4/45/Mission_Majnu.jpg",
      moviesName: "MANJNU-I LOVE YOU",
      releaseDate: "15-JUNE-2022",
      imdbRating :9.2,
    },

    {
      poster : "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/11/23172237/256419793_583203212949355_2217893051951393936_n.jpg",
      moviesName: "PRITHIV RAJ",
      releaseDate: "20-JUNE-2022",
      imdbRating : 9.7,
    },

    {
      poster : "https://s2.dmcdn.net/v/SIlzv1UyRD8RczgJc/x1080",
      moviesName: "KICK-2",
      releaseDate: "18-JUNE-2022",
      imdbRating : 10,
    },

    {
      poster : " https://khansirofficial.in/php_assets/uploads/2022/01/pushpa-movie-download.jpg",
      moviesName: "PUSHPA-2",
      releaseDate: "26-JUNE-2022",
      imdbRating : 9.8,
    },

    {
      poster : "https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/anj2/61b9b941c582e0000106e342/95ad1576-3de7-43e9-9a9b-17e3141584e6.jpg",
      moviesName: "GOVINDA-THE SUPER*STAR",
      releaseDate: "12-JUNE-2022",
      imdbRating : 9.3,
    },

    {
      poster : "https://www.scrolldroll.com/wp-content/uploads/2021/11/laal-singh-chaddha-bollywood-movies-releasing-in-2022.jpg",
      moviesName: "LAL SINGH CHADDHA",
      releaseDate: "12-JUNE-2022",
      imdbRating : 9.9,
    },

    {
      poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB9N1xxF-YlCPfRkePRlFNNHaY6F20r5C5g&usqp=CAU",
      moviesName: "PATHAN",
      releaseDate: "30-JUNE-2022",
      imdbRating : 9.4,
    },

    {
      poster : "https://1.bp.blogspot.com/-JuzYKwffn98/Xpd082XVOtI/AAAAAAAAn4g/X5MIgUUgfGQEiXefql7CCjsU8ShuQCxjgCLcBGAsYHQ/s1600/Krrish%2B3%2BPhoto.JPG",
      moviesName: "KRRISH",
      releaseDate: "25-JUNE-2022",
      imdbRating : 9.1,
    },

  ]

  var moviesData = JSON.parse(localStorage.getItem("movies"))

var showMovies = document.querySelector("#movies");

display(moviescollection);

function display(data){
  showMovies.innerHTML="";

  data.forEach(function(elem){
  
    var box = document.createElement("div");

    var poster = document.createElement("img");
    poster.setAttribute("src",elem.poster);

    var moviesName = document.createElement("h3");
    moviesName.innerText = elem.moviesName;

    var releaseDate = document.createElement("h4");
    releaseDate.innerText = elem.releaseDate;

    var imdbRating = document.createElement("h3");
    imdbRating.innerText = "Rating :-" +elem.imdbRating; // change

  box.append(moviesName,poster,releaseDate,imdbRating);
  showMovies.append(box);

  localStorage.setItem("movies",JSON.stringify(moviescollection));// object or an array of object ko set karne ke liye stringifu use karte hai

  });
}



function changeimdbRating(){

var select = document.querySelector("#sorting").value;

console.log(select);

if(select=="HTL"){
  moviesData.sort(function(a,b){
  return b.imdbRating - a.imdbRating;
  
  });
  console.log(moviesData);
  display(moviesData);//display==annonymes fuction used multiple times
}


if(select=="LTH"){
  moviesData.sort(function(a,b){
  return a.imdbRating - b.imdbRating;

  });
  console.log(moviesData);
  display(moviesData);
}


}



function slideshow(){
    let i=0;
    let slideshowdiv=document.getElementById("slideshow");
    let imgg=document.createElement("img")
    imgg.src=moviescollection[i].poster;
    slideshowdiv.append(imgg)
    i=i+1
   setInterval(function(){
       if(i==moviescollection.length)
       {
           i=0;
       }
       slideshowdiv.innerHTML=null;
       let image=moviescollection[i].poster;
       let img=document.createElement("img");
       img.src=image;
       slideshowdiv.append(img)
       i++
   },3000)
}

slideshow()