package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "reviews")
@Data
public class Review_Entity {

    @Id
    @Column(name = "review_id", columnDefinition = "bigint")
    private Long reviewId;

    @Column(name = "review_title", columnDefinition = "varchar(100)")
    private String reviewTitle;

    @Column(name = "review_text", columnDefinition = "varchar(500)")
    private String reviewText;

}
