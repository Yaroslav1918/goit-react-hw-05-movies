import PopularFilmList from "../components/PopularFilmList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as serviesApi from "../servies/serviesApi";
import Status from "../servies/status";
import Eror from "../components/Eror";

export default function HomePage() {
  const [filmList, setFilmList] = useState(null);
  const [eror, setEror] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();

  useEffect(() => {
    serviesApi
      .fetchPopularFilm()
      .then(setFilmList)
      .catch((error) => {
        setEror(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <>
      {status === "rejected" && <Eror value={eror} />}
      {filmList && (
        <PopularFilmList filmList={filmList.results} location={location} />
      )}
    </>
  );
}
