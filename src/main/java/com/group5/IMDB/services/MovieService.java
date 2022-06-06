package com.group5.IMDB.services;

import com.group5.IMDB.entities.Movie;
import com.group5.IMDB.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public ResponseEntity<Object> getMovieDetails(Long movieId){
        try {
            Optional<Movie> movie = movieRepository.findById(movieId);
            if(movie.isEmpty()){
                return new ResponseEntity<>(new Movie(), HttpStatus.OK);
            }
            return new ResponseEntity<>(movie.get(), HttpStatus.OK);
        }
        catch(IllegalArgumentException ex){
            return new ResponseEntity<>("Please provide a valid Movie ID.", HttpStatus.BAD_REQUEST);
        }
    }

    public Movie find(long id) {
        return movieRepository.findById(id).orElse(new Movie());
    }

}
