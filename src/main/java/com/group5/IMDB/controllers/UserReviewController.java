package com.group5.IMDB.controllers;

import com.group5.IMDB.entities.Review;
import com.group5.IMDB.services.UserReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/review")
public class UserReviewController {

    private final UserReviewService userReviewService;

    public UserReviewController(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }

    @RequestMapping("/userreviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        List<Review> reviews = userReviewService.getAllReviews();
        System.out.println(reviews);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("find/{id}")
    public ResponseEntity<Review> getUserReviewById(@PathVariable("id") Long id){
        Review userReview = userReviewService.getUserReview(id);
        return  new ResponseEntity<>(userReview,HttpStatus.OK);
    }

}
