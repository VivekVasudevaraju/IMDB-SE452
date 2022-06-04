import React from "react";
import MovieExtraDetails from "../components/MovieExtraDetails/MovieExtraDetails";
import MovieInformation from "../components/MovieInformation/MovieInformation";

function MovieDetailsPage() {
  return (
    <>
      <style>
        {`
          .App {
              height: 100vh;
          }
          `}
      </style>
      <MovieInformation />
      <MovieExtraDetails />
    </>
  );
}

export default MovieDetailsPage;
