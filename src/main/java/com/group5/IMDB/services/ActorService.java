package com.group5.IMDB.services;

import java.util.List;

import com.group5.IMDB.entities.Actor;
import com.group5.IMDB.repositories.ActorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActorService {

    @Autowired
    private ActorRepository repo;

    public List<Actor> findAll() {
        return repo.findAll();
    }

    public List<Actor> find(long id) {
        return repo.findByMovieId(id);
    }

    public void save(Actor actor) {
        repo.save(actor);
    }
}

