import { lazy, Suspense } from "react";
import AppBar from "../AppBar";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import LoaderComponent from "../LoaderComponent";
const HomePage = lazy(() =>
  import("../../views/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("../../views/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../views/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
