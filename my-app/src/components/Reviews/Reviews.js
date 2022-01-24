import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as serviesApi from "../../servies/serviesApi";
import NoFoundReviews from "../NoFoundReviews";
import Status from "../../servies/status";

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const [error, setError] = useState(null);
  const { moviesId } = useParams();
  useEffect(() => {
    if (!moviesId) return;

    serviesApi
      .fetchReviewsById(moviesId)
      .then((data) => {
        if (data.results.length === 0) {
          setStatus(Status.REJECTED);
        }
        setReviews(data);
      })
      .catch(setError);
  }, [moviesId]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.results.map((item) => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
      {status === "rejected" && <NoFoundReviews eror={error} />}
    </>
  );
}
