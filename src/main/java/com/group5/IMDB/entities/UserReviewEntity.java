package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
@Data
public class UserReviewEntity {

    @Id
    @Column(name = "user_review_id")
    private String userReviewId;

    @Column(name = "movie_id")
    private String movieID;

    @Column(name = "user_id")
    private String userID;


    @Column(name = "user_review_title", length = 200)
    private String userReviewTitle;

    @Column(name = "user_review_text", length = 2048)
    private String userReviewText;

}
