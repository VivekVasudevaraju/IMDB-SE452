package com.group5.IMDB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ImdbApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImdbApplication.class, args);
	}

	/* Testing */
	@GetMapping
	public String welcome() {
		return "Welcome to IMDB";
	}

	@GetMapping("/version")
	public String version() {
		return "The current version is 0.0.1";
	}
}
