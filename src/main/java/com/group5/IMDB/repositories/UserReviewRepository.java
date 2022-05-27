package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReviewRepository extends JpaRepository<Review,Long> {

    //PlaceHolder For Repo Class

}
