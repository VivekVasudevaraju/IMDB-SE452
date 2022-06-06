package com.group5.IMDB.entities;


import lombok.Data;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Actor {

    private Long actorId;

    private String actorName;

    private String actorCharacter;

    private String actorImage;

    private Long movieId;
}

