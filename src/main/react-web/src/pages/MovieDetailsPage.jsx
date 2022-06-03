import React from "react";
import MovieExtraDetails from "../components/MovieExtraDetails/MovieExtraDetails";
import MovieInformation from "../components/MovieInformation/MovieInformation";

function MovieDetailsPage() {
  return (
    <>
      <MovieInformation />
      <MovieExtraDetails />
    </>
  );
}

export default MovieDetailsPage;
