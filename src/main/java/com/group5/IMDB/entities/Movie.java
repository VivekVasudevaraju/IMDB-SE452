package com.group5.IMDB.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "movies")
@Data
public class Movie implements Serializable {

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

        @OneToMany // (fetch = FetchType.EAGER)
        @JoinTable(name = "movie_userreview", joinColumns = {
                        @JoinColumn(name = "movie_id", referencedColumnName = "movie_id") }, inverseJoinColumns = {
                                        @JoinColumn(name = "review_id", referencedColumnName = "review_id", unique = true)
                        })
        private List<Review> review;

        @JsonManagedReference
        @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER)
        private List<Rating> ratings = new ArrayList<>();

        @OneToMany // (fetch = FetchType.EAGER)
        @JoinTable(name = "movie_theatres", joinColumns = {
                        @JoinColumn(name = "movie_id", referencedColumnName = "movie_id") }, inverseJoinColumns = {
                                        @JoinColumn(name = "theatre_id", referencedColumnName = "theatre_id", unique = true)
                        })
        private List<Theatre> movie_theatre;

        @Transient
        private List<Award> awards = new ArrayList<>();

        @Transient
        private List<Actor> actors = new ArrayList<>();

        @JsonManagedReference
        @OneToMany(mappedBy = "movie", fetch = FetchType.EAGER)
        @EqualsAndHashCode.Exclude
        private Set<Review> reviews = new HashSet<>();


}
