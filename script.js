
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")
let movieID = []    

cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>
`

searchButton.addEventListener("click", function(e) {  //search button
e.preventDefault()

let searchInput = document.querySelector("input").value  // get the value of the input

cardList.innerHTML = ""         // clears the cardList


fetch(`http://www.omdbapi.com/?s=${searchInput}?&apikey=d45d22f1`)      // fetching the data from the API
.then(response => response.json())
.then( movieDB => renderMovies(movieDB))

                                                    // array to store the movie ID

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

  movieIDVar =  movieDB.Search[i].imdbID   // this is the imdbID of the movie looping
    movieID.push(movieIDVar)                // now this one pushes it on to the array

    }


  console.log(movieID[2])




}



})