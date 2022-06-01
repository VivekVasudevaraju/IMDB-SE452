package com.group5.IMDB.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movies")
@Data
public class Movie {

    @Id
    @GeneratedValue
    @Column(name = "movie_id", columnDefinition = "bigint")
    private Long movieId;

    @Column(name = "movie_title", columnDefinition = "varchar(255)", nullable = false)
    private String movieTitle;

    @Column(name = "description", columnDefinition = "varchar(255)", nullable = false)
    private String movieDescription;

    @Column(name = "duration", columnDefinition = "integer", nullable = false)
    private int duration;

    @Column(name = "movie_img", columnDefinition = "text", nullable = false)
    private String movieImg;

}

