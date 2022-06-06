package com.group5.IMDB.services;

import com.group5.IMDB.entities.Actor;
import com.group5.IMDB.entities.Award;
import com.group5.IMDB.entities.Genre;
import com.group5.IMDB.entities.Movie;
import com.group5.IMDB.repositories.ActorRepository;
import com.group5.IMDB.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {

    @Autowired
    private GenreRepository repo;

    public List<Genre> findAll() {
        return repo.findAll();
    }

    public List<Genre> find(long id) {
        return repo.findByMovieId(id);
    }

    public void save(Genre genre) {
        repo.save(genre);
    }

}
