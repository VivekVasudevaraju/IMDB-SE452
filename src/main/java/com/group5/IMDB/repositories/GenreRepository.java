package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
