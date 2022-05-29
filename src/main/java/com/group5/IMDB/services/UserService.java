package com.group5.IMDB.services;

import java.util.List;

import com.group5.IMDB.entities.User;
import com.group5.IMDB.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> findAll() {
        return repo.findAll();
    }

    public User find(String userName) {
        return repo.findById(userName).orElse(new User());
    }

    public void save(User user) {
        repo.save(user);
    }

    public void delete(String userName) {
        User user = repo.findById(userName).orElse(new User());
        if (user.getUserName() != "") {
            repo.delete(user); 
        }       
    }
    
}

