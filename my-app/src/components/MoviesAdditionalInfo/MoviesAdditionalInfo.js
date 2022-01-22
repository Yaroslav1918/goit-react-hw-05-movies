import { Link, useParams, Route } from "react-router-dom";

export default function MoviesAdditionalInfo() {
  const { moviesId } = useParams();
  return (
    <>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${moviesId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${moviesId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
}
