const searchButton = document.querySelector("#search__btn");
const watchListButton = document.querySelector("#watchlist__btn");
const cardList = document.querySelector("main");
const addToWatchlist = document.querySelector(".watchlist__icon");

cardList.innerHTML = `<main style ="display:flex" ><div id="center__page">
<img src="Icon.movie.png" alt="">
<div><h4>Start exploring</h4></div>
</div></main>`;


searchButton.addEventListener("click", function (e) {
  //search button
  e.preventDefault();

  let searchInput = document.querySelector("input").value; // get the value of the input

  cardList.innerHTML = ""; // clears the cardList

  async function getMovies() {
    const movieID = await fetch(
      `https://www.omdbapi.com/?s=${searchInput}&apikey=d45d22f1`
    );
    const movieData = await movieID.json();

    const movieList = movieData.Search; // get the movie list
    const movielistID = movieList.map((movie) => movie.imdbID); // map trough the array and get the imdbID

    for (let i = 0; i < movielistID.length; i++) {
      // the array loops trough the lenght of all the imdbID and put it in the fetch as a parameter to get the movie data
      const firstMovieData = await fetch(
        `https://www.omdbapi.com/?i=${movielistID[i]}&apikey=d45d22f1`
      );
      const firstMovieDataJson = await firstMovieData.json();

      let uniqueID = Date.now() // random number to make the movie object unique


   const card = document.createElement("div");
   card.classList.add("card");
   const div = document.createElement("div");
   div.classList.add("flexbox");
   const moviePoster = document.createElement("img");
   moviePoster.classList.add("movie__poster");
   moviePoster.src = firstMovieDataJson.Poster;
   const divTitle = document.createElement("div");
   divTitle.classList.add("title");
   divTitle.innerHTML = firstMovieDataJson.Title;
   const spanStar = document.createElement("span");
   spanStar.classList.add("star");
   spanStar.innerHTML = "⭐";
   const spanRating = document.createElement("span");
   spanRating.classList.add("rating");
   spanRating.innerHTML = firstMovieDataJson.Ratings[0].Value;
   const movieInfoDiv = document.createElement("div");
   movieInfoDiv.classList.add("movie__info");
   const spanRuntime = document.createElement("span");
   spanRuntime.classList.add("runtime");
   spanRuntime.innerHTML = firstMovieDataJson.Runtime;
   const spanGenre = document.createElement("span");
   spanGenre.classList.add("genre");
   spanGenre.innerHTML = firstMovieDataJson.Genre;


   const addToWatchlistBtn = document.createElement("button");
   addToWatchlistBtn.textContent = "Add to Watchlist";
   addToWatchlistBtn.classList.add("addToWatchlistBtn");

   addToWatchlistBtn.addEventListener("click", function () {
       // add to watchlist button
         savedMovieObj = {
             title: firstMovieDataJson.Title,
               poster: firstMovieDataJson.Poster,
               rating: firstMovieDataJson.Ratings[0].Value,
               runtime: firstMovieDataJson.Runtime,
               genre: firstMovieDataJson.Genre,
               plot: firstMovieDataJson.Plot,
               imdbID: firstMovieDataJson.imdbID,
               uniqueID: uniqueID
         }
         localStorage.setItem(uniqueID, JSON.stringify(savedMovieObj));
     
   })
   

   const movieDescription = document.createElement("div");
   movieDescription.classList.add("movie__description");
   movieDescription.innerHTML = firstMovieDataJson.Plot;

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
  }

  getMovies().catch((err) => console.log(err));
});

