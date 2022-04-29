package com.group5.IMDB.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class UserReviewEntity {

    @Id
    @Column(name = "userReviewId")
    private String userReviewId;

    @Column(name = "movieID")
    private String movieID;

    @Column(name = "userID")
    private String userID;

    @Column(length = 200)
    private String userReviewTitle;

    @Column(length = 2048)
    private String userReviewText;

    public UserReviewEntity() {
    }

    public UserReviewEntity(String userReviewId, String movieID, String userID, String userReviewTitle, String userReviewText) {
        this.userReviewId = userReviewId;
        this.movieID = movieID;
        this.userID = userID;
        this.userReviewTitle = userReviewTitle;
        this.userReviewText = userReviewText;
    }

    public String getUserReviewId() {
        return userReviewId;
    }

    public void setUserReviewId(String userReviewId) {
        this.userReviewId = userReviewId;
    }

    public String getMovieID() {
        return movieID;
    }

    public void setMovieID(String movieID) {
        this.movieID = movieID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getUserReviewTitle() {
        return userReviewTitle;
    }

    public void setUserReviewTitle(String userReviewTitle) {
        this.userReviewTitle = userReviewTitle;
    }

    public String getUserReviewText() {
        return userReviewText;
    }

    public void setUserReviewText(String userReviewText) {
        this.userReviewText = userReviewText;
    }



}
