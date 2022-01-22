import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as serviesApi from "../../servies/serviesApi";
import noFoundPhoto from "../../image/no_image.jpg";

export default function Cast() {
  const [castStats, setCastStats] = useState(null);

  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;

    serviesApi.fetchCreditsById(moviesId).then(setCastStats).catch(setError);
  }, [moviesId]);

  return (
    <>
      <ul>
        {castStats &&
          castStats.cast.map(
            ({ cast_id, profile_path, original_name, character }) => (
              <li key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : noFoundPhoto
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            )
          )}
      </ul>
    </>
  );
}
