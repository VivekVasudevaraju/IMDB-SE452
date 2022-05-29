package com.group5.IMDB.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.logging.Level;

import com.group5.IMDB.entities.User;
import com.group5.IMDB.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.java.Log;

@RestController
@RequestMapping("/api/users")
@Log
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/")
    public List<User> getAllUsers() {
        List<User> users = service.findAll();
        log.log(Level.SEVERE, users.toString());
        return users;
    }

    @GetMapping("/{userName}")
    public User read(@PathVariable("userName") String userName) {
        User user = service.find(userName);     
        log.log(Level.SEVERE, user.toString());
        return user;
    }

    @DeleteMapping("/{userName}")
    public ResponseEntity delete(@PathVariable("userName") String userName) {
        service.delete(userName);
        return ResponseEntity.ok().build();
    }    

    @PostMapping
    public ResponseEntity createRating(@RequestBody User user) throws URISyntaxException {
        User currentUser = service.find(user.getUserName());
        if (currentUser.getUserName() != "") {
            service.save(user);
        }
        return ResponseEntity.created(new URI("/users/" + user.getUserName())).body(user);
    }

    @PutMapping("/{userName}")
    public ResponseEntity updateRating(@PathVariable String userName, @RequestBody User user) {
        User currentUser = service.find(userName);
        currentUser.setFirstName(user.getFirstName());
        currentUser.setLastName(user.getLastName());
        currentUser.setEmail(user.getEmail());
        currentUser.setZipCode(user.getZipCode());
        currentUser.setCity(user.getCity());
        currentUser.setState(user.getState());
        currentUser.setPhoneNumber(user.getPhoneNumber());
        service.save(currentUser);

        return ResponseEntity.ok(currentUser);
    }    

}

