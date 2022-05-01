package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> { 
}
