package com.group5.IMDB.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "reviews")
@Data
public class Review implements Serializable {

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
    @Column(name = "review_id", columnDefinition = "bigint",nullable = true)
    private Long id;

    @Column(name = "review_title", columnDefinition = "varchar(100)",nullable = false)
    private String reviewTitle;

    @Column(name = "review_text", columnDefinition = "varchar(500)")
    private String reviewText;

    @Column(name = "review_likes", columnDefinition = "bigint")
    private Integer thumbsUp = 0;

    @Column(name = "review_dislikes", columnDefinition = "bigint")
    private Integer thumbsDown = 0;

}
