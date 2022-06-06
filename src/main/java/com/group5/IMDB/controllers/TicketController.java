package com.group5.IMDB.controllers;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group5.IMDB.entities.Ticket;
import com.group5.IMDB.services.TicketService;

import lombok.extern.java.Log;

@RestController
@RequestMapping("/api/book")
@Log
public class TicketController {

    @Autowired
    private TicketService service;

    @PostMapping
    public ResponseEntity createRating(@RequestBody Ticket ticket) throws URISyntaxException {
        service.save(ticket);
        return ResponseEntity.created(new URI("/rating/" + ticket.getThreatreId())).body(ticket);
    }
    
}
