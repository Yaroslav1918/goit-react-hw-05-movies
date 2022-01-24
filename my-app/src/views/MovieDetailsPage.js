import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as serviesApi from "../servies/serviesApi";
import { useRouteMatch, Route } from "react-router-dom";
import Status from "../servies/status";
import LoaderComponent from "../components/LoaderComponent";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MoviesAdditionalInfo from "../components/MoviesAdditionalInfo";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import MoviesCard from "../components/MoviesCard";
import Eror from "../components/Eror";

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [eror, setEror] = useState(null);
  const { path, url } = useRouteMatch();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(
    location?.state?.from ?? "/"
  );

  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;
    setStatus(Status.PENDING);
    serviesApi
      .fetchFilmById(moviesId)
      .then((data) => {
        setFilm(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        setEror(error);
        setStatus(Status.REJECTED);
      });
  }, [moviesId]);
  return (
    <>
      {status === "idle" && null}

      {status === "pending" && <LoaderComponent />}

      {status === "rejected" && <Eror value={eror} />}
      {status === "resolved" && (
        <>
          <MoviesCard film={film} />
          <MoviesAdditionalInfo location={prevLocation} url={url} />
          <Route path={`${path}/cast`}>{moviesId && <Cast />}</Route>
          <Route path={`${path}/reviews`}>{moviesId && <Reviews />}</Route>
        </>
      )}
    </>
  );
}
