package com.group5.IMDB.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class HomeControllerTests {
    
    @Autowired
	HomeController homeController;

    @Test
	void contextLoads() {
	}

	@Test
	void welcome() {
		final String welcomeTest = homeController.welcome();
		if(welcomeTest.equals("Welcome to IMDB") || welcomeTest.equals("Welcome to IMDB Dev")) {
			assertTrue(true);
		} else {
			assertTrue(false);
		}
    }

    @Test
    void version() {
        assertEquals( "The current version is 0.0.1", homeController.version());
    }
}
