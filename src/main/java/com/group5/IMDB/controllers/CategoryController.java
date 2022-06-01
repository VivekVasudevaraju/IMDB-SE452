package com.group5.IMDB.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.logging.Level;

import com.group5.IMDB.entities.Category;
import com.group5.IMDB.services.CategoryService;

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
@RequestMapping("/api/category")
@Log
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping("/")
    public List<Category> getAllCategories() {
        List<Category> category = service.findAll();
        log.log(Level.SEVERE, category.toString());
        return category;
    }

    @GetMapping("/{categoryId}")
    public Category read(@PathVariable("categoryId") Long categoryId) {
        Category category = service.find(categoryId);     
        log.log(Level.SEVERE, category.toString());
        return category;
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity delete(@PathVariable("categoryId") Long categoryId) {
        service.delete(categoryId);
        return ResponseEntity.ok().build();
    }    

    @PostMapping
    public ResponseEntity createRating(@RequestBody Category category) throws URISyntaxException {
        service.save(category);
        return ResponseEntity.created(new URI("/category/" + category.getCategoryId())).body(category);
    }

    @PutMapping("/{categoryId}")
    public ResponseEntity updateRating(@PathVariable Long categoryId, @RequestBody Category category) {
        Category currentCategory = service.find(categoryId);
        currentCategory.setCategory(category.getCategory());
        service.save(currentCategory);

        return ResponseEntity.ok(currentCategory);
    } 
}

