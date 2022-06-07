
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")


cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>
`

searchButton.addEventListener("click", function(e) { 
e.preventDefault()

let searchInput = document.querySelector("input").value

cardList.innerHTML = ""


fetch(`http://www.omdbapi.com/?s=${searchInput}?&apikey=d45d22f1`)
.then(response => response.json())
.then( movieDB => renderMovies(movieDB))

let movieID = []


function renderMovies(movieDB) {

    for (let i = 0; i < movieDB.Search.length; i++) {
    let renderCard = `<div class="card">
    <div><img class="movie__poster" src= ${movieDB.Search[i].Poster} alt=""></div>
    <div>
    <div class="title">${movieDB.Search[i].Title}<span class="star"> ⭐ </span> <span class="rating"></span></div>
    <div class="movie__info"><span>${movieDB.Search[i].Runtime}</span><span>${movieDB.Search[i].Genre}</span><div><span class="watchlist__icon"><img class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
    <div class="movie__description">${movieDB.Search[i].Plot}</div>
    </div>
    </div>
    `
    cardList.innerHTML += renderCard
  movieID +=  movieDB.Search[i].imdbID

    }

console.log(movieID)

}



})