
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")  



cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>
`


searchButton.addEventListener("click", function(e) {  //search button
   e.preventDefault()

   let searchInput = document.querySelector("input").value  // get the value of the input
   
   cardList.innerHTML = ""         // clears the cardList
   
async function getMovies() { 
   const movieID = await fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=d45d22f1`)
   const movieData = await movieID.json()

  

const movieList = movieData.Search // get the movie list
const movielistID = movieList.map(movie => movie.imdbID) // map trough the array and get the imdbID



for (let i = 0; i < movielistID.length; i++) {    // the array loops trough the lenght of all the imdbID and put it in the fetch as a parameter to get the movie data

 const firstMovieData = await fetch(`https://www.omdbapi.com/?i=${movielistID[i]}&apikey=d45d22f1`)
 const firstMovieDataJson = await firstMovieData.json()


 cardList.innerHTML += `<div class="card">
 <div><img src="bladerunner.png" alt=""></div>
 <div>
 <div class="title">Blade Runner <span class="star"> ⭐ </span> <span class="rating">8.1</span></div>
 <div class="movie__info"><span>117 min</span><span>Action, Drama, Sci-fi</span><div><span class="watchlist__icon"><img class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
 <div class="movie__description">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</div>
 </div>
 </div>
 `

console.log(firstMovieDataJson)

}


}

getMovies() 
.catch(err => console.log(err))


})