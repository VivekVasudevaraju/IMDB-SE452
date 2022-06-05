import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/MovieExtraDetails/Loading";
import MovieExtraDetails from "../components/MovieExtraDetails/MovieExtraDetails";
import MovieInformation from "../components/MovieInformation/MovieInformation";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getMovieDetails() {
    try {
      const { data } = await axios.get(`/api/movie/${movieId}`);
      setMovieData(data);
      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovieDetails();
  }, []);
  return isLoading ? (
    <>
      <style>
        {`
          body .App {
              height: 100vh;
          }
          `}
      </style>
      <Loading />
    </>
  ) : (
    <>
      <style>
        {`
          body .App {
              height: 100vh;
          }
          `}
      </style>
      <MovieInformation movieData={movieData} />
      <MovieExtraDetails reviews={movieData.review} movieId={movieId} />
    </>
  );
}

export default MovieDetailsPage;
