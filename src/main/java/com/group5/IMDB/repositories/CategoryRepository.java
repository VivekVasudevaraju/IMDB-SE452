package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByCategory(String category);
}

