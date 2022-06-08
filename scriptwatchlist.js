const cardList = document.querySelector("main")  




for (let i = 0; i < localStorage.length; i++) {

let savedMovies = JSON.parse(localStorage.getItem(i))


cardList.innerHTML += `<div class="card">
<div><img class="movie__poster" src="${savedMovies.poster} " alt=""></div>
<div>
<div class="title">${savedMovies.title}  <span class="star"> ⭐ </span> <span class="rating"> ${savedMovies.rating}</span></div>
<div class="movie__info"><span>${savedMovies.runtime}</span><span>${savedMovies.genre}</span><div><span class="watchlist__icon"><img onclick="deleteMovie(${i}) "  class="plusicon" src="deleteicon.png" alt="">Delete</span></div></div>
<div class="movie__description"> ${savedMovies.plot}</div>
</div>
</div>
`

}

function deleteMovie (pass) {
    
    localStorage.removeItem(pass)
    location.reload()
}