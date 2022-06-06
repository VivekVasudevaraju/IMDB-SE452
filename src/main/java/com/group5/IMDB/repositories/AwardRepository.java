package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Award;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AwardRepository extends MongoRepository<Award, Long> {
    List<Award> findByMovieId(Long movieId);
}
