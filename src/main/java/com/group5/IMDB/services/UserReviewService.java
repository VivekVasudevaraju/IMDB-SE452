package com.group5.IMDB.services;

import com.group5.IMDB.entities.Review;
import com.group5.IMDB.repositories.UserReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserReviewService {

    private final UserReviewRepository userReviewRepository;

    @Autowired
    public UserReviewService(UserReviewRepository userReviewRepository) {
        this.userReviewRepository = userReviewRepository;
    }


    public Review addUserReview(Review userReview){
        return userReviewRepository.save(userReview);
    }

    public List<Review> getAllReviews(){
       return userReviewRepository.findAll();
    }

    public Review thumbsUpIncrease(Long thumbId){

        Review existingReviewDetails = getUserReview(thumbId);
        existingReviewDetails.setThumbsUp(existingReviewDetails.getThumbsUp()+1);
        return userReviewRepository.save(existingReviewDetails);

    }

    public Review thumbsDownIncrease(Long thumbId){

        Review existingReviewDetails = getUserReview(thumbId);
        existingReviewDetails.setThumbsDown(existingReviewDetails.getThumbsDown()+1);
        return userReviewRepository.save(existingReviewDetails);

    }

    public void updateUserReview(Review userReview){
        userReviewRepository.save(userReview);
    }


    public void deleteUserReview(Long id){
        userReviewRepository.deleteReviewById(id);
    }

    public Review getUserReview(Long id){
        return userReviewRepository.getUserReviewById(id);
    }

//    public List<Review> getUserReviewsByMovieId(Long movieID){
//        return userReviewRepository.getUserReviewsByMovieId(movieID);
//    }

}

