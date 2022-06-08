
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")  
const addToWatchlist = document.querySelector(".watchlist__icon")
let savedMovies = []
let savedMovieObj = {}

cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>`



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
 <div><img class="movie__poster" src="${firstMovieDataJson.Poster} " alt=""></div>
 <div>
 <div class="title"> ${firstMovieDataJson.Title} <span class="star"> ⭐ </span> <span class="rating">${firstMovieDataJson.Ratings[0].Value} </span></div>
 <div class="movie__info"><span>${firstMovieDataJson.Runtime} </span><span>${firstMovieDataJson.Genre} </span><div><span class="watchlist__icon"><img onclick="saveMovie (${i}) "  class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
 <div class="movie__description">${firstMovieDataJson.Plot} </div>
 </div>
 </div>
 `

   savedMovieObj = { 
                      title: firstMovieDataJson.Title,
                     poster: firstMovieDataJson.Poster,
                     rating: firstMovieDataJson.Ratings[0].Value,
                       runtime: firstMovieDataJson.Runtime,
                        genre: firstMovieDataJson.Genre,
                       plot: firstMovieDataJson.Plot,

                    }

   savedMovies.push(savedMovieObj)
}


}


getMovies() 
.catch(err => console.log(err))

})



function saveMovie(pass, ) {
   
   console.log(pass)

}
