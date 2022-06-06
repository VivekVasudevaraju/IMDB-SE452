package com.group5.IMDB.services;

import com.group5.IMDB.entities.Award;
import com.group5.IMDB.repositories.AwardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AwardService {

    @Autowired
    private AwardRepository awardRepository;

    public List<Award> findAll() {return awardRepository.findAll();}

    public List<Award> find(long id){
        return awardRepository.findByMovieId(id);
    }

    public void save(Award award) {awardRepository.save(award);}
}
