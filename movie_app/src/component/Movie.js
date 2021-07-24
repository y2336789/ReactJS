import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// Movie Component는 state가 필요 없음 -> function Component로!

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    // 클릭시 /movie-detail로 넘어감!
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          {/* map 함수는 현재의 item과 item number, 2개를 리턴한다. */}
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              // list의 자식 요소들은 key값을 가지고 있어야함!
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
