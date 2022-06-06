package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Actor;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActorRepository extends MongoRepository<Actor, Long> {
    List<Actor> findByMovieId(Long movieId);
}
