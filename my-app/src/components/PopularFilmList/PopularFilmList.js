import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PopularFilmList({ filmList, location }) {
  return (
    <ul>
      {filmList.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
PopularFilmList.propTypes = {
  filmList: PropTypes.array.isRequired,
};
