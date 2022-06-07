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


fetch(`http://www.omdbapi.com/?t=${searchInput}?&apikey=d45d22f1`)
.then(response => response.json())
.then( movieDB => renderMovies(movieDB))


function renderMovies(movieDB) {

    console.log(movieDB)

    let renderCard = `<div class="card">
    <div><img class="movie__poster" src= ${movieDB.Poster} alt=""></div>
    <div>
    <div class="title">${movieDB.Title}<span class="star"> ⭐ </span> <span class="rating">${movieDB.Ratings[0].Value}</span></div>
    <div class="movie__info"><span>${movieDB.Runtime}</span><span>${movieDB.Genre}</span><div><span class="watchlist__icon"><img class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
    <div class="movie__description">${movieDB.Plot}</div>
    </div>
    </div>
    `

    cardList.innerHTML = renderCard 


}



})