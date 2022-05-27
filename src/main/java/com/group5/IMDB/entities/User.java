package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

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
    private String lastaName;

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

    @Column(name = "password", columnDefinition = "varchar(50)", nullable = false)
    private String password;

}
