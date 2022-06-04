package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserReviewRepository extends JpaRepository<Review,Long> {
    void deleteReviewById(Long id);


    Review getUserReviewById(Long id);

//    List<Review> getUserReviewsByMovieId(Long movieID);
}
