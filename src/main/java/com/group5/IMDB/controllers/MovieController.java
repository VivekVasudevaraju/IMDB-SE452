package com.group5.IMDB.controllers;

import com.group5.IMDB.services.MovieService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/movie")
@Log
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/{movie_id}")
    public ResponseEntity<Object> getMovieDetails(@PathVariable("movie_id") Long movieId){
        return movieService.getMovieDetails(movieId);
    }

}
