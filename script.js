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

cardList.innerHTML = `<div class="card">
<div><img src="bladerunner.png" alt=""></div>
<div>
<div class="title">Blade Runner <span class="star"> ⭐ </span> <span class="rating">8.1</span></div>
<div class="movie__info"><span>117 min</span><span>Action, Drama, Sci-fi</span><div><span class="watchlist__icon"><img class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
<div class="movie__description">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</div>
</div>
</div>

`









fetch(`http://www.omdbapi.com/?t=${searchInput}?&apikey=d45d22f1`)
.then(response => response.json())
.then(data => { console.log(data) } )




})