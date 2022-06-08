
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")  
let movieList = []


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

  
 const firstMovie =  movieData.Search[0].imdbID
  const secondMovie =    movieData.Search[1].imdbID
    const thirdMovie =  movieData.Search[2].imdbID

 
 const firstMovieData = await fetch(`https://www.omdbapi.com/?i=${firstMovie}&apikey=d45d22f1`)
 const firstMovieDataJson = await firstMovieData.json()

 console.log(firstMovieDataJson)



}


getMovies() 
.catch(err => console.log(err))

})