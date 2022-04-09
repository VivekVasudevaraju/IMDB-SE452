package com.group5.IMDB;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ImdbApplicationTests {

	@Autowired
	ImdbApplication imdbApplication;

	@Test
	void contextLoads() {
	}

	@Test
	void welcome() {
        assertEquals( "Welcome to IMDB", imdbApplication.welcome());
    }

    @Test
    void version() {
        assertEquals( "The current version is 0.0.1", imdbApplication.version());
    }

}
