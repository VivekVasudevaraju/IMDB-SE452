DROP TABLE IF EXISTS theatre_auditorium;
DROP TABLE IF EXISTS movie_cast;
DROP TABLE IF EXISTS movie_theatres;
DROP TABLE IF EXISTS movie_categories;
DROP TABLE IF EXISTS username_userreview;
DROP TABLE IF EXISTS movie_userreview;
DROP TABLE IF EXISTS movie_ratings;
DROP TABLE IF EXISTS movie_genres;
DROP TABLE IF EXISTS rating_user;
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS showtimes;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS casts;
DROP TABLE IF EXISTS theatres;
DROP TABLE IF EXISTS auditoriums;
DROP SEQUENCE IF EXISTS hibernate_sequence;
DROP SEQUENCE IF EXISTS sequence;


CREATE SEQUENCE hibernate_sequence START WITH 1 INCREMENT BY 1;
-- STARTING AT 11 BECAUSE OF DUMMY DATA -Temp
CREATE SEQUENCE sequence START 11;

CREATE TABLE categories (
    category_id         BIGINT AUTO_INCREMENT,
    category            VARCHAR(255) NOT NULL,

    PRIMARY KEY (category_id)
);

CREATE TABLE movies (
    movie_id            BIGINT AUTO_INCREMENT,
    movie_title         VARCHAR(255) NOT NULL,
    description         VARCHAR(255) NOT NULL,
    duration            INTEGER NOT NULL,
    movie_img           TEXT NOT NULL,

    PRIMARY KEY (movie_id)
);

CREATE TABLE movie_categories (
    movie_category_id   BIGINT AUTO_INCREMENT,
    movie_id             BIGINT NOT NULL,
    category_id            BIGINT NOT NULL,

    PRIMARY KEY (movie_category_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE genres (
    genre_id            INTEGER,
    genre_name          VARCHAR(50) NOT NULL,

    PRIMARY KEY (genre_id)
);

CREATE TABLE movie_genres (
    movie_genre_id      INTEGER,
    movie_id            INTEGER,
    genre_id            INTEGER NOT NULL,

    PRIMARY KEY (movie_genre_id),
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

CREATE TABLE ratings (
    rating_id           BIGINT AUTO_INCREMENT,
    -- movie_id            BIGINT NOT NULL,
    -- user_name           VARCHAR(255) NOT NULL,
    rating_level        INTEGER NOT NULL,

    PRIMARY KEY (rating_id)
);

CREATE TABLE reviews (
    review_id           BIGINT,
    review_title        VARCHAR(255) NOT NULL,
    review_text         VARCHAR(2500) NOT NULL,
    review_likes        INTEGER NOT NULL,
    review_dislikes     INTEGER NOT NULL,

    -- movie_id            BIGINT NOT NULL,
    -- user_name           VARCHAR(255) NOT NULL,
    -- review_likes        INTEGER NOT NULL,

    PRIMARY KEY (review_id)
);

CREATE TABLE users (
    user_name           VARCHAR(50) NOT NULL,
    first_name          VARCHAR(50) NOT NULL,
    last_name           VARCHAR(50) NOT NULL,
    email               VARCHAR(50) NOT NULL UNIQUE,
    zipcode             INTEGER(6),
    state               VARCHAR(50),
    city                VARCHAR(50),
    phone_number        BIGINT(10),

    PRIMARY KEY (user_name)
);

CREATE TABLE rating_user (
    rating_user_id BIGINT AUTO_INCREMENT,
    rating_id BIGINT,
    user_name VARCHAR(50),

    PRIMARY KEY (rating_user_id),
    FOREIGN KEY (rating_id) REFERENCES ratings(rating_id),
    FOREIGN KEY (user_name) REFERENCES users(user_name)
);

CREATE TABLE movie_ratings (
    movie_rating_id BIGINT AUTO_INCREMENT,
    movie_id BIGINT,
    rating_id BIGINT,

    PRIMARY KEY (movie_rating_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (rating_id) REFERENCES ratings(rating_id)
);

CREATE TABLE username_userreview (
username_userreview_id BIGINT AUTO_INCREMENT,
user_name VARCHAR(50),
review_id BIGINT,
PRIMARY KEY (username_userreview_id),
FOREIGN KEY (review_id) REFERENCES reviews(review_id),
FOREIGN KEY (user_name) REFERENCES users(user_name)
);

CREATE TABLE movie_userreview (
movie_userreview_id BIGINT AUTO_INCREMENT,
movie_id BIGINT,
review_id BIGINT,
PRIMARY KEY (movie_userreview_id),
FOREIGN KEY (review_id) REFERENCES reviews(review_id),
FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);


CREATE TABLE casts (
    cast_id             BIGINT NOT NULL,
    cast_name           VARCHAR(255) NOT NULL,
    gender              VARCHAR(255) NOT NULL,
    dob                 DATE NOT NULL,
    weight              INTEGER NOT NULL,
    height              INTEGER NOT NULL,
    spouse              VARCHAR(255) NULL,
    alias               VARCHAR(255) NULL,

    PRIMARY KEY (cast_id)
);

CREATE TABLE movie_cast (
    movie_cast_id       BIGINT NOT NULL,
    cast_id             BIGINT NOT NULL,
    movie_id            BIGINT NOT NULL,

    PRIMARY KEY (movie_cast_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

CREATE TABLE theatres (
    theatre_id          BIGINT,
    theatre_city        VARCHAR,
    theatre_name        VARCHAR,
    theatre_state       VARCHAR,
    theatre_zipcode     INTEGER,

    PRIMARY KEY (theatre_id)
);

CREATE TABLE movie_theatres (
    movie_theatres_id    BIGINT,
    theatre_id          BIGINT NOT NULL,
    movie_id            BIGINT NOT NULL,

    PRIMARY KEY (movie_theatres_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (theatre_id) REFERENCES theatres(theatre_id)
);

CREATE TABLE auditoriums (
    auditorium_id       BIGINT AUTO_INCREMENT,
    auditorium_name     VARCHAR(255) NOT NULL,
    available_seats     INTEGER NOT NULL,
    
    PRIMARY KEY (auditorium_id)
);

CREATE TABLE theatre_auditorium (
    theatre_auditorium_id BIGINT,
    theatre_id          BIGINT NOT NULL,
    auditorium_id       BIGINT NOT NULL,

    PRIMARY KEY (theatre_auditorium_id),
    FOREIGN KEY (theatre_id) REFERENCES theatres(theatre_id),
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id)
);

CREATE TABLE showtimes (
    showtime_id         BIGINT NOT NULL,
    auditorium_id       BIGINT NOT NULL,
    start_time          VARCHAR(255) NOT NULL,

    PRIMARY KEY (showtime_id),
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id)
);

CREATE TABLE tickets (
    ticket_id           BIGINT AUTO_INCREMENT,
    user_name           VARCHAR(255) NOT NULL,
    movie_id            BIGINT NOT NULL,
    theatre_id          BIGINT NOT NULL,
    auditorium_id       BIGINT NOT NULL,
    showtime_id         BIGINT NOT NULL,
    seats_booked        INTEGER NOT NULL,

    PRIMARY KEY (ticket_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (user_name) REFERENCES users(user_name),
    FOREIGN KEY (theatre_id) REFERENCES theatres(theatre_id),
    FOREIGN KEY (auditorium_id) REFERENCES auditoriums(auditorium_id),
    FOREIGN KEY (showtime_id) REFERENCES showtimes(showtime_id)
);

CREATE TABLE awards (
    award_id            BIGINT AUTO_INCREMENT,
    award_title         VARCHAR(255) NOT NULL,

    PRIMARY KEY (award_id)
);

CREATE TABLE movie_awards (
    movie_awards_id     BIGINT AUTO_INCREMENT,
    movie_id            BIGINT NOT NULL,
    award_id            BIGINT NOT NULL,

    PRIMARY KEY (movie_awards_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (award_id) REFERENCES awards(award_id)
);

CREATE TABLE actors (
    actor_id            BIGINT AUTO_INCREMENT,
    actor_name          VARCHAR(255) NOT NULL,
    actor_character     VARCHAR(255) NOT NULL,
    actor_image         TEXT NOT NULL,

    PRIMARY KEY (actor_id)
);

CREATE TABLE movie_actors (
    movie_actors_id     BIGINT AUTO_INCREMENT,
    movie_id            BIGINT NOT NULL,
    actor_id            BIGINT NOT NULL,

    PRIMARY KEY (movie_actors_id),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY (actor_id) REFERENCES actors(actor_id)
);