const cardList = document.querySelector("main")  

cardList.innerHTML = ""    

for (let i = 0; i < localStorage.length; i++) {

let savedMovies = JSON.parse(localStorage.getItem(i))
console.log(savedMovies)


cardList.innerHTML += `<div class="card">
<div><img class="movie__poster" src="${savedMovies.poster} " alt=""></div>
<div>
<div class="title">${savedMovies.title}  <span class="star"> ⭐ </span> <span class="rating"> ${savedMovies.rating}</span></div>
<div class="movie__info"><span>${savedMovies.runtime}</span><span>${savedMovies.genre}</span><div><span class="watchlist__icon"><img onclick="saveMovie () "  class="plusicon" src="plusicon.png" alt="">  Watchlist</span></div></div>
<div class="movie__description"> ${savedMovies.plot}</div>
</div>
</div>
`

}



