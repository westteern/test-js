const fetchGenres =
  ' https://api.themoviedb.org/3/genre/movie/list?api_key=50f1c38da446101780a79b9df9405e4f';

const fetchTrendFilms =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=50f1c38da446101780a79b9df9405e4f';

const getDataGenres = async fetchApi => {
  const response = await fetch(fetchApi);
  const jsonObj = await response.json();

  return jsonObj;
};
const getDataFilms = async fetchFilm => {
  const response = await fetch(fetchFilm);
  const jsonObj = await response.json();

  return jsonObj;
};

(async function () {
  let responseGenr = await getDataFilms(fetchGenres);
  let genres = responseGenr.genres;
  for (const genre of genres) {
    console.log(genre.name);
  }
  let responseFilm = await getDataFilms(fetchTrendFilms);
  let films = responseFilm;
  console.log(films);
})();
