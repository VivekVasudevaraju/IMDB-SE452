package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Award;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AwardRepository extends JpaRepository<Award, Long> {
}
