// MovieDetail.js

import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({ title, description, trailerLink }) => {
  return (
    <div className="movie-detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <iframe width="560" height="315" src={trailerLink} title="Movie Trailer" allowFullScreen></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
