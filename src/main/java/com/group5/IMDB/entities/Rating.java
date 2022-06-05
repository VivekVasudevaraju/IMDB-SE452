package com.group5.IMDB.entities;

import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ratings")
@Data
public class Rating implements Serializable {

    @Id
    @SequenceGenerator(
        name = "sequence",
        sequenceName = "sequence",
        allocationSize = 1,
        initialValue = 11
    )
    @GeneratedValue(
        strategy = GenerationType.AUTO,
        generator = "sequence"
    )
    @Column(name = "rating_id", columnDefinition = "bigint")
    private Long ratingId;

    @Column(name = "rating_level", columnDefinition = "integer", nullable = false)
    private int ratingLevel;

    @OneToOne //(fetch = FetchType.EAGER)
    @JoinTable(name = "Rating_User", joinColumns = {
        @JoinColumn(name = "rating_id", referencedColumnName = "rating_id")},
    inverseJoinColumns = {
        @JoinColumn(name = "user_name", referencedColumnName = "user_name", unique = true)
    })
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
	@JoinTable(name = "Movie_Ratings", joinColumns = @JoinColumn(name = "rating_id", referencedColumnName = "rating_id", nullable = true), inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id", nullable = true))
	@JsonIgnoreProperties("ratings")
    @ToString.Exclude
	private Movie movie;

}

