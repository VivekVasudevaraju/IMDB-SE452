package com.group5.IMDB.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.List;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @Column(name = "user_name", columnDefinition = "varchar(50)", nullable = false)
    private String userName;

    @Column(name = "first_name", columnDefinition = "varchar(50)", nullable = false)
    private String firstName;

    @Column(name = "last_name", columnDefinition = "varchar(50)", nullable = false)
    private String lastName;

    @Email(message = "Please check the email address")
    @Column(name = "email", columnDefinition = "varchar(50)", nullable = false)
    private String email;

    @Column(name = "zipcode", columnDefinition = "integer(6)", nullable = false)
    private int zipCode;

    @Column(name = "state", columnDefinition = "varchar(50)", nullable = false)
    private String state;

    @Column(name = "city", columnDefinition = "varchar(50)", nullable = false)
    private String city;

    @Column(name = "phone_number", columnDefinition = "bigint(10)", nullable = false)
    private Long phoneNumber;


//    @OneToMany //(fetch = FetchType.EAGER)
//    @JoinTable(name = "username_userreview", joinColumns = {
//            @JoinColumn(name ="user_name" , referencedColumnName = "user_name")},
//            inverseJoinColumns = {
//                    @JoinColumn(name = "review_id", referencedColumnName = "review_id" ,unique = true)
//            })
//    private List<Review> review;

}
