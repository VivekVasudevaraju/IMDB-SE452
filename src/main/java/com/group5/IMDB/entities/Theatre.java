package com.group5.IMDB.entities;

import lombok.Data;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "theatres")
@Data

public class Theatre {

    @Id
    @Column(name = "theatre_id", columnDefinition = "bigint")
    private Long theatreId;

    @Column(name = "theatre_name", columnDefinition = "varchar(25)")
    private String theatreName;

    @Column(name = "theatre_zipcode", columnDefinition = "int")
    private Integer theatreZipcode;

    @Column(name = "theatre_city", columnDefinition = "varchar(25)")
    private String theatreCity;

    @Column(name = "theatre_state", columnDefinition = "varchar(25)")
    private String theatreState;

    @OneToMany // (fetch = FetchType.EAGER)
    @JoinTable(name = "theatre_auditorium", joinColumns = {
            @JoinColumn(name = "theatre_id", referencedColumnName = "theatre_id") }, inverseJoinColumns = {
                    @JoinColumn(name = "auditorium_id", referencedColumnName = "auditorium_id", unique = true)
            })
    private List<Auditorium> theatre_auditoriums;
}