package com.group5.IMDB.services;

import org.springframework.beans.factory.annotation.Autowired;

public class UserReviewService {

    private final UserReviewService userReviewService;

    @Autowired
    public UserReviewService(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }
}

