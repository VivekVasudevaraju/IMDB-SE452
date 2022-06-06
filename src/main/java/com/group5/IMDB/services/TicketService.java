package com.group5.IMDB.services;

import java.util.List;

import com.group5.IMDB.entities.Ticket;
import com.group5.IMDB.repositories.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    private TicketRepository repo;

    public List<Ticket> findAll() {
        return repo.findAll();
    }

    public void save(Ticket ticket) {
        repo.save(ticket);
    }

}
