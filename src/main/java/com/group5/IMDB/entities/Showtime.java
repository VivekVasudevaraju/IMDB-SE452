package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "showtimes")
@Data
public class Showtime {

    @Id
    @GeneratedValue
    @Column(name = "showtime_id", columnDefinition = "bigint")
    private Long showtimeId;

    @Column(name = "auditorium_id", columnDefinition = "bigint")
    private Long auditoriumId;

    @Column(name = "start_time", columnDefinition = "VARCHAR")
    private String startTime;

}