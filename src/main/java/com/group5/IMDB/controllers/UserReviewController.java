package com.group5.IMDB.controllers;

import com.group5.IMDB.services.UserReviewService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review")
public class UserReviewController {

    private final UserReviewService userReviewService;

    public UserReviewController(UserReviewService userReviewService) {
        this.userReviewService = userReviewService;
    }
}
