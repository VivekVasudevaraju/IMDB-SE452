package com.group5.IMDB.entities;

 

import lombok.Data;
import lombok.ToString;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "categories")
@Data
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "category_id", columnDefinition = "bigint")
    private Long categoryId;

    @Column(name = "category", columnDefinition = "varchar(255)", nullable = false)
    private String category;

    @OneToMany
    @JoinTable(name = "Movie_Categories", joinColumns = {
        @JoinColumn(name = "category_id", referencedColumnName = "category_id")},
    inverseJoinColumns = {
        @JoinColumn(name = "movie_id", referencedColumnName = "movie_id", unique = true)
    })
    @ToString.Exclude
    private List<Movie> movies;

}

