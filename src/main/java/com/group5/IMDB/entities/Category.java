package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

}
