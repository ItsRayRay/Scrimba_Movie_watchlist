const searchButton = document.querySelector("#search__btn")
const watchListButton = document.querySelector("#watchlist__btn")
let searchInput = document.querySelector("#search__input")



searchButton.addEventListener("click", function(e) { 
    e.preventDefault()
    let searchValue = searchInput.value

fetch(`http://www.omdbapi.com/?t=${searchValue}?&apikey=d45d22f1`)
.then(response => response.json())
.then(data => { console.log(data) } )


})