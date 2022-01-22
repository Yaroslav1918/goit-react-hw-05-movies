import noFoundPhoto from "../../image/no_image.jpg";
import s from "../../style//Button.module.css";
import { FcHome } from "react-icons/fc";
import PropTypes from "prop-types";

export default function MoviesCard({ film, onClick }) {
  return (
    <>
      <button type="button" className={s.btn} onClick={() => onClick()}>
        <FcHome /> <span> Go home</span>
      </button>
      <h3>{film.original_title}</h3>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w200/${film.poster_path}`
            : noFoundPhoto
        }
        alt={film.original_title}
      />
      <p> User score: {film.vote_average}</p>
      <h4>Overview</h4>
      <p>{film.overview}</p>
      <h5>Genres</h5>
      <ul>
        {film.genres.length === 0 ? (
          <li>
            <p>Genres no found</p>
          </li>
        ) : (
          film.genres.map((item) => <li key={item.id}>{item.name}</li>)
        )}
      </ul>
    </>
  );
}

MoviesCard.propTypes = {
  film: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
