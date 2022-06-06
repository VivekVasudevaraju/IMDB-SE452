package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Ticket;

// import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TicketRepository extends MongoRepository<Ticket, Long> {
    // List<Ticket> findByMovieId(Long movieId);
}
