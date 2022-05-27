package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserReviewRepository extends JpaRepository<Review,Long> {

    //PlaceHolder For Repo Class

}
