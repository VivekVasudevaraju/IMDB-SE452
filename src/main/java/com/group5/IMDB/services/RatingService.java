package com.group5.IMDB.services;

import java.util.List;

import com.group5.IMDB.entities.Rating;
import com.group5.IMDB.repositories.RatingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingService {

    @Autowired
    private RatingRepository repo;

    public List<Rating> findAll() {
        return repo.findAll();
    }

    public Rating find(long id) {
        return repo.findById(id).orElse(new Rating());
    }

    public void save(Rating rating) {
        repo.save(rating);
    }

    public void delete(long id) {
        Rating rating = repo.findById(id).orElse(new Rating());
        if (rating.getRatingId() > 0) {
            repo.delete(rating); 
        }       
    }
    
}
