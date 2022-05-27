package com.group5.IMDB.controllers;

import java.util.logging.Level;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.java.Log;

@RestController
@RequestMapping("/api/welcome")
@Log
public class HomeController {
    @Value("${app.greeting}")
	private String welcomeName;

	@GetMapping("/")
	public String welcome() {
		log.log(Level.INFO, welcomeName);
		return "Welcome to " + welcomeName;
	}

	@GetMapping("/version")
	public String version() {
		return "The current version is 0.0.1";
	}
}
