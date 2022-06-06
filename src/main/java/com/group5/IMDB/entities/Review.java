package com.group5.IMDB.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "reviews")
@Data
public class Review implements Serializable {

    @Id
    @SequenceGenerator(
            name = "sequence_2",
            sequenceName = "sequence_2",
            allocationSize = 1,
            initialValue = 11
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "sequence_2"
    )
    @Column(name = "review_id", columnDefinition = "bigint",nullable = true)
    private Long id;

//    @Column(name = "movie_id", columnDefinition = "bigint",nullable = true)
//    private Long movieId;

    @Column(name = "review_title", columnDefinition = "varchar(100)",nullable = false)
    private String reviewTitle;

    @Column(name = "review_text", columnDefinition = "varchar(500)")
    private String reviewText;

    @Column(name = "review_likes", columnDefinition = "bigint")
    private Integer thumbsUp = 0;

    @Column(name = "review_dislikes", columnDefinition = "bigint")
    private Integer thumbsDown = 0;


    @OneToOne //(fetch = FetchType.EAGER)
    @JoinTable(name = "username_userreview", joinColumns = {
            @JoinColumn(name ="review_id" , referencedColumnName = "review_id")},
            inverseJoinColumns = {
                    @JoinColumn(name = "user_name", referencedColumnName = "user_name" ,unique = true)
            })
    private User user;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinTable(name = "movie_userreview", joinColumns = @JoinColumn(name = "review_id", referencedColumnName = "review_id", nullable = true), inverseJoinColumns = @JoinColumn(name = "movie_id", referencedColumnName = "movie_id", nullable = true))
    @JsonIgnoreProperties("reviews")
    @ToString.Exclude
    private Movie movie;


}
