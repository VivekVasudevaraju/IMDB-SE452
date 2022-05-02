package com.group5.IMDB.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "genres")
@Data
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "genre_id")
    private Long id;

    @Column(name = "genre_name")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "genre" , cascade = CascadeType.ALL)
    @JsonIgnoreProperties("genres")
    private List<Movie_Genre> movie_genres = new ArrayList<>();
}
