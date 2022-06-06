package com.group5.IMDB.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//@Table(name = "genres")
@Document
@Data
public class Genre {


    private Long genreId;

    private String name;

    private Long movieId;

}
