package com.group5.IMDB.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "awards")
@Data
public class Award {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "award_id")
    private Long id;

    @Column(name = "award_title")
    private String awardTitle;
}
