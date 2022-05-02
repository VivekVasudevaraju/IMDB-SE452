DROP TABLE IF EXISTS theatres;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS auditoriums;

CREATE SEQUENCE hibernate_sequence START WITH 1 INCREMENT BY 1;

create table theatres
(
    theatre_id      bigint,
    theatre_city    varchar,
    theatre_name    varchar,
    theatre_state   varchar,
    theatre_zipcode integer
);

create table reviews
(
    review_id       bigint,
    review_title    varchar(100),
    review_text     varchar(500)
);

CREATE TABLE ratings(
    rating_id BIGINT AUTO_INCREMENT,
    rating INTEGER NOT NULL,
    PRIMARY KEY (rating_id)
);

CREATE TABLE users(
    user_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    zipcode INTEGER(6) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    phone_number BIGINT(10) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_name)
);

CREATE TABLE tickets (
    ticket_id       BIGINT AUTO_INCREMENT,
    user_name       VARCHAR(255) NOT NULL,
    movie_id        BIGINT NOT NULL,
    theatre_id      BIGINT NOT NULL,
    auditorium_id   BIGINT NOT NULL,
    showtime_id     BIGINT NOT NULL,
    seats_booked    INTEGER NOT NULL,
    PRIMARY KEY (ticket_id)
);

CREATE TABLE auditoriums (
    auditorium_id   BIGINT AUTO_INCREMENT,
    auditorium_name VARCHAR(255) NOT NULL,
    available_seats INTEGER NOT NULL,
    PRIMARY KEY (auditorium_id)
);