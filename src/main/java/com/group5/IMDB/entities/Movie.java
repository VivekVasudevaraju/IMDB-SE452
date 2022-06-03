package com.group5.IMDB.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "movies")
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "movie_id")
    private Long movieId;

    @Column(name = "movie_title")
    private String movieTitle;

    @Column(name = "description")
    private String description;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "movie_image")
    private String movieImage;

    @Column(name = "genres")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id" , cascade = CascadeType.ALL)
    private List<Movie_Genre> genres;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="category_id")
    private Category movieCategory;

    @Column(name = "ratings")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ratingId" , cascade = CascadeType.ALL)
    private List<Rating> ratings;

    @Column(name = "reviews")
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id" , cascade = CascadeType.ALL)
    private List<Review> reviews;

    public Movie() {
    }

    public Movie(Long movieId, String movieTitle, String description, Integer duration, String movieImage, List<Movie_Genre> genres, Category movieCategory, List<Rating> ratings, List<Review> reviews) {
        this.movieId = movieId;
        this.movieTitle = movieTitle;
        this.description = description;
        this.duration = duration;
        this.movieImage = movieImage;
        this.genres = genres;
        this.movieCategory = movieCategory;
        this.ratings = ratings;
        this.reviews = reviews;
    }
}
