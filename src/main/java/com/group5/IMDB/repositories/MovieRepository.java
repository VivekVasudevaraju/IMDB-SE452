package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
