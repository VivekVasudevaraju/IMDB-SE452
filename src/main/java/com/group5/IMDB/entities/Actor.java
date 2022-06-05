package com.group5.IMDB.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "actors")
@Data
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "actor_id")
    private Long id;

    @Column(name = "actor_name")
    private String actorName;

    @Column(name = "actor_character")
    private String actorCharacter;

    @Column(name = "actor_image")
    private String actorImage;
}
