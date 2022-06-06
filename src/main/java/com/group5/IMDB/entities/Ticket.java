package com.group5.IMDB.entities;

import lombok.Data;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Ticket {

    private String theatre;

    private String showTime;

    private String time;

    private String seats;

    private String userName;
}
