package com.group5.IMDB.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @Value("${app.greeting}")
	private String welcomeName;

	@GetMapping
	public String welcome() {
		return "Welcome to " + welcomeName;
	}

	@GetMapping("/version")
	public String version() {
		return "The current version is 0.0.1";
	}
}
