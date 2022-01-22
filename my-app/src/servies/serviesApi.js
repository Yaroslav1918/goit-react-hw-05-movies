const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1938d617a50ef3d61b3b5089a743aea2";

async function fetchWithErrorHandling(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchPopularFilm() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchMovies(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
  );
}

export function fetchFilmById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}
export function fetchReviewsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
export function fetchCreditsById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}
