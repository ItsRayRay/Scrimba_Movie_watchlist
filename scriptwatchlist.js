const cardList = document.querySelector("main")  


for (let i = 0; i < localStorage.length; i++) {

let savedMovies = JSON.parse(localStorage.getItem(i))
console.log(savedMovies)



cardList.innerHTML += `<div class="card">
<div><img class="movie__poster" src=" " alt=""></div>
<div>
<div class="title">  <span class="star"> ⭐ </span> <span class="rating"> </span></div>
<div class="movie__info"><span></span><span></span><div><span class="watchlist__icon"><img onclick="saveMovie () "  class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
<div class="movie__description"> </div>
</div>
</div>
`

}



