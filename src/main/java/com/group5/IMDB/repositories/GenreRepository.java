package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Actor;
import com.group5.IMDB.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GenreRepository extends MongoRepository<Genre, Long> {

    List<Genre> findByMovieId(Long movieId);

}
