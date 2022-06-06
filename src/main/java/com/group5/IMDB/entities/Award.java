package com.group5.IMDB.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Document
@Data
public class Award {
    private Long awardId;
    private String awardTitle;
    private Long movieId;
}
