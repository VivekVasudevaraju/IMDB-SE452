package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ratings")
@Data
public class Rating {

    @Id
    @GeneratedValue
    @Column(name = "rating_id", columnDefinition = "bigint")
    private Long ratingId;

    @Column(name = "rating", columnDefinition = "integer", nullable = false)
    private int rating;

}
