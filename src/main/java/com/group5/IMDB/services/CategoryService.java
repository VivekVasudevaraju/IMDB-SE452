package com.group5.IMDB.services;

import java.util.List;

import com.group5.IMDB.entities.Category;
import com.group5.IMDB.repositories.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repo;

    public List<Category> findAll() {
        return repo.findAll();
    }

    public Category find(long id) {
        return repo.findById(id).orElse(new Category());
    }

    public Category findByCategory(String category) {
        return repo.findByCategory(category);
    }

    public void save(Category category) {
        repo.save(category);
    }

    public void delete(long id) {
        Category category = repo.findById(id).orElse(new Category());
        if (category.getCategoryId() > 0) {
            repo.delete(category); 
        }       
    }
    
}

