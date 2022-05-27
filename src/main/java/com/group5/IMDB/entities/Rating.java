package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ratings")
@Data
public class Rating {

    @Id
    @GeneratedValue
    @Column(name = "rating_id", columnDefinition = "bigint")
    private Long ratingId;

    @Column(name = "rating_level", columnDefinition = "integer", nullable = false)
    private int ratingLevel;

    @OneToOne //(fetch = FetchType.EAGER)
    @JoinTable(name = "Rating_User", joinColumns = {
        @JoinColumn(name = "rating_id", referencedColumnName = "rating_id")},
    inverseJoinColumns = {
        @JoinColumn(name = "user_name", referencedColumnName = "user_name", unique = true)
    })
    private User user;

}
