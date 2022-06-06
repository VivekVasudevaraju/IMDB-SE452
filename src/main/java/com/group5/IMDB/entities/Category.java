package com.group5.IMDB.entities;

import lombok.Data;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Category {

    private Long categoryId;

    private String category;

    private List<Long> movies;

    private List<Movie> movieDetails;

}

