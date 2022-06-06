package com.group5.IMDB.entities;

import lombok.Data;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Ticket {

    private Long ticketId;

    private String userName;

    private Long movieId;

    private Long threatreId;

    private Long auditoriumId;

    private Long showtimeId;

    private int seatsBooked;
}
