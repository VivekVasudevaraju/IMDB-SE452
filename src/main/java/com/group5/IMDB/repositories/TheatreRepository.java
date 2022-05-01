package com.group5.IMDB.repositories;


import com.group5.IMDB.entities.TheatreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheatreRepository extends JpaRepository<TheatreEntity,Integer> {


}
