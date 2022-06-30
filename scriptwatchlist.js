let items = { ...localStorage };

// json parse items variable
items = Object.keys(items).map(key => JSON.parse(localStorage.getItem(key)));



const cardList = document.querySelector("main")  




for (let i = 0; i < items.length; i++) {
    console.log(items[i]);

 
    const card = document.createElement("div");
    card.classList.add("card");
    const div = document.createElement("div");
    div.classList.add("flexbox");
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("movie__poster");
    moviePoster.src = items[i].poster;
    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.innerHTML = items[i].title;
    const spanStar = document.createElement("span");
    spanStar.classList.add("star");
    spanStar.innerHTML = "⭐";
    const spanRating = document.createElement("span");
    spanRating.classList.add("rating");
    spanRating.innerHTML = items[i].rating;
    const movieInfoDiv = document.createElement("div");
    movieInfoDiv.classList.add("movie__info");
    const spanRuntime = document.createElement("span");
    spanRuntime.classList.add("runtime");
    spanRuntime.innerHTML = items[i].runtime;
    const spanGenre = document.createElement("span");
    spanGenre.classList.add("genre");
    spanGenre.innerHTML = items[i].genre;
 
 
    const addToWatchlistBtn = document.createElement("button");
    addToWatchlistBtn.textContent = "Remove From Watchlist";
    addToWatchlistBtn.classList.add("addToWatchlistBtn");

   
    const movieDescription = document.createElement("div");
    movieDescription.classList.add("movie__description");
    movieDescription.innerHTML = items[i].plot;
 
    cardList.append(card);
    card.append(div);
    div.append(moviePoster);
    div.append(divTitle);
    divTitle.append(spanStar);
    divTitle.append(spanRating);
    div.append(movieInfoDiv);
    movieInfoDiv.append(spanRuntime);
    movieInfoDiv.append(spanGenre);
    div.append(addToWatchlistBtn);
    div.append(movieDescription);
 
 

}