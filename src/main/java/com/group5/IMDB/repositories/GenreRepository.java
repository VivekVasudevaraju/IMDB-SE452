package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GenreRepository extends MongoRepository<Genre, Long> {
}
