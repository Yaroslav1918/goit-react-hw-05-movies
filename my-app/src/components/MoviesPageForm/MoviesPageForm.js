import { useState } from "react";
import PropTypes from "prop-types";
import s from "../MoviesPageForm/MoviesPageForm.module.css";

export default function MoviesPageForm({ onSubmit }) {
  const [seacrhQuery, setSeacrhQuery] = useState("");

  const handleNameChange = (event) => {
    const value = event.currentTarget.value.toLowerCase();
    setSeacrhQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(seacrhQuery);
    setSeacrhQuery("");
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.btn}>
          Submit
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="seacrhQuery"
          value={seacrhQuery}
          onChange={handleNameChange}
        />
      </form>
    </>
  );
}

MoviesPageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
