package com.group5.IMDB.repositories;

import com.group5.IMDB.entities.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category, Long> {
    Category findByCategoryId(long categoryId);
}

