import PopularFilmList from "../components/PopularFilmList";
import { useEffect, useState } from "react";
import * as serviesApi from "../servies/serviesApi";

export default function HomePage() {
  const [filmList, setFilmList] = useState(null);
  useEffect(() => {
    serviesApi.fetchPopularFilm().then(setFilmList);
  }, []);

  return <>{filmList && <PopularFilmList filmList={filmList.results} />}</>;
}
