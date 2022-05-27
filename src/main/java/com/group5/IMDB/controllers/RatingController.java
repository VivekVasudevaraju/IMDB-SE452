package com.group5.IMDB.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.logging.Level;

import com.group5.IMDB.entities.Rating;
import com.group5.IMDB.services.RatingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.java.Log;

@RestController
@RequestMapping("/api/rating")
@Log
public class RatingController {

    @Autowired
    private RatingService service;

    @GetMapping("/{ratingId}")
    public Rating read(@PathVariable("ratingId") Long ratingId) {
        Rating rating = service.find(ratingId);     
        log.log(Level.SEVERE, rating.toString());
        return rating;
    }

    @DeleteMapping("/{ratingId}")
    public ResponseEntity delete(@PathVariable("ratingId") Long ratingId) {
        service.delete(ratingId);
        return ResponseEntity.ok().build();
    }    

    @PostMapping
    public ResponseEntity createRating(@RequestBody Rating rating) throws URISyntaxException {
        service.save(rating);
        return ResponseEntity.created(new URI("/clients/" + rating.getRatingId())).body(rating);
    }

    @PutMapping("/{ratingId}")
    public ResponseEntity updateRating(@PathVariable Long ratingId, @RequestBody Rating rating) {
        Rating currentRating = service.find(ratingId);
        currentRating.setRatingLevel(rating.getRatingLevel());
        service.save(currentRating);

        return ResponseEntity.ok(currentRating);
    }    

}
