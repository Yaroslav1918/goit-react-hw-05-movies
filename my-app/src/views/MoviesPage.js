import { useState, useEffect } from "react";
import * as serviesApi from "../servies/serviesApi";
import MoviesPageForm from "../components/MoviesPageForm";
import PopularFilmList from "../components/PopularFilmList";
import MovieDetailsPage from "../views/MovieDetailsPage";
import { useRouteMatch } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent";
import Status from "../servies/status";

export default function MoviesPage() {
  const [status, setStatus] = useState(Status.IDLE);
  const [query, setQuery] = useState("");
  const [filmList, setFilmList] = useState(null);
  const [eror, setEror] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    serviesApi
      .fetchMovies(query)
      .then((data) => {
        setFilmList(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setEror(error);
        setStatus(Status.REJECTED);
      });
  }, [query]);

  return (
    <>
      {status === "idle" && null}
      {status === "rejected" && <h2>{eror}</h2>}

      {status === "pending" && <LoaderComponent />}
      <MoviesPageForm onSubmit={setQuery} />
      {status === "resolved" && (
        <PopularFilmList filmList={filmList.results} urlMoviesPage={url} />
      )}
      <MovieDetailsPage />
    </>
  );
}
