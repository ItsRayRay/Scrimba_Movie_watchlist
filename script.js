const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
const cardList = document.querySelector("main")


searchButton.addEventListener("click", function(e) { 
e.preventDefault()

let searchInput = document.querySelector("input").value

fetch(`http://www.omdbapi.com/?t=${searchInput}?&apikey=d45d22f1`)
.then(response => response.json())
.then(data => { console.log(data) } )





})