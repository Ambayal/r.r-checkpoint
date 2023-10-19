// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const movies = [
  // Define your movie objects with title, description, posterURL, rating, and trailerLink.
];

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/movie/:title">
            <MovieDetail movies={movies} />
          </Route>
          <Route path="/">
            <MovieList movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
