
const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")  
let firstMovie = ""
let secondMovie = ""
let thirdMovie = ""
let fourthMovie = ""
let fifthMovie = ""


cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>
`

searchButton.addEventListener("click", function(e) {  //search button
e.preventDefault()
let searchInput = document.querySelector("input").value  // get the value of the input

let movieList = []

cardList.innerHTML = ""         // clears the cardList


fetch(`http://www.omdbapi.com/?s=${searchInput}?&apikey=d45d22f1`)      // fetching the data from the API
.then(response => response.json())
.then( movieDB =>     {  
                         for (let i = 0; i < movieDB.Search.length; i++) {
                            movieList.push(movieDB.Search[i].imdbID)  //loops trough the movieDB and adds the imdbID to the movieList
                         } }).catch(error => console.log(error)) 




console.log(typeof(movieList))

for (let i = 0; i < movieList.length; i++) {
                         
fetch(`http://www.omdbapi.com/?i=tt3826198&apikey=d45d22f1`)
.then(response => response.json())
.then( movies=> {console.log(movies)} )







}

} )






