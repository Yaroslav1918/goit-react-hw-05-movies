import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PopularFilmList({ filmList }) {
  const urlMoviesPage = "/movies";

  return (
    <ul>
      {filmList.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`${urlMoviesPage}/${id}`}>{title || name}</Link>
        </li>
      ))}
    </ul>
  );
}
PopularFilmList.propTypes = {
  filmList: PropTypes.array.isRequired,
};
