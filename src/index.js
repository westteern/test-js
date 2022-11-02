const fetchGenres =
  ' https://api.themoviedb.org/3/genre/movie/list?api_key=50f1c38da446101780a79b9df9405e4f';

const fetchTrendFilms =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=50f1c38da446101780a79b9df9405e4f&page=2';

const fetchSearch =
  'https://api.themoviedb.org/3/search/company?api_key=&page=1';

const getDataGenres = async fetchGenres => {
  const response = await fetch(fetchGenres);
  const jsonObj = await response.json();

  return jsonObj;
};
const getDataFilms = async fetchFilm => {
  const response = await fetch(fetchFilm);
  const jsonObj = await response.json();

  return jsonObj;
};

// (async function () {
//   let responseGenr = await getDataFilms(fetchGenres);
//   let genres = responseGenr.genres;
//   for (const genre of genres) {
//     console.log(genre.id);
//   }
//   let responseFilm = await getDataFilms(fetchTrendFilms);
//   let films = responseFilm.results;
//   for (const filmRate of films) {
//     console.log(filmRate.vote_average.toFixed(1));
//   }
//   console.log(films);
// })();

(async function () {
  let responseGenr = await getDataFilms(fetchGenres);
  let genres = responseGenr.genres;
  // console.log(genres);

  let responseFilm = await getDataFilms(fetchTrendFilms);
  let films = responseFilm.results;

  for (const film of films) {
    // підставляєм жанри під id
    let idFilm = film.genre_ids;
    let searchID = searchGenresName(idFilm);
    film.genre_ids = searchID;
    // форматуємо рейтинг
    film.vote_average = film.vote_average.toFixed(1);
    // форматуємо дату виходу фільму
    film.release_date = film.release_date.slice(0, 4);
  }

  // ми маємо змінений масив обєктів під маркап
  console.log(films);

  function searchGenresName(ids) {
    let genresNamesArr = [];
    const searchId = ids;
    let genreName;

    for (var i = 0; i < ids.length; i++) {
      genreName = genres.find(list => list.id === searchId[i]).name;
      genresNamesArr.push(genreName);
    }
    return genresNamesArr;
  }
})();
