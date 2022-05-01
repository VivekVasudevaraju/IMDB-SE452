package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
