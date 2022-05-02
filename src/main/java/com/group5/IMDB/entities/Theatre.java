package com.group5.IMDB.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "theatres")
@Data

public class Theatre {

    @Id
    @Column(name = "theatre_id",columnDefinition = "bigint")
    private Long theatreId;

    @Column(name = "theatre_name" ,columnDefinition = "varchar(25)")
    private String theatreName;

    @Column(name = "theatre_zipcode" ,columnDefinition = "int")
    private Integer theatreZipcode;

    @Column(name = "theatre_city" ,columnDefinition = "varchar(25)")
    private String theatreCity;

    @Column(name = "theatre_state" ,columnDefinition = "varchar(25)")
    private String theatreState;

}
