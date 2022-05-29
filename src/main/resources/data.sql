



-- Theatre Table Dummy Data

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (0,'Springfield', 'AMC Entertainment', 'Illinois', '62794');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (1,'Peoria', 'Apple Cinemas	', 'Illinois', '61614');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (2,'Carol Stream', 'Apple Cinemas	', 'Illinois', '60351');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (3,'Naperville', 'Marcus Theatres', 'Illinois', '60567');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (4,'Evanston', 'AMC Entertainment	', 'Illinois', '60208');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (5,'Peoria', 'AMC Entertainment	', 'Illinois', '61614');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (6,'Chicago', 'AMC Entertainment	', 'Illinois', '60611');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (7,'Chicago', 'AMC Entertainment	', 'Illinois', '60611');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (8,'Naperville', 'AMC Entertainment	', 'Illinois', '60567');

insert into theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode)
values (9,'Springfield', 'Marcus Theatres', 'Illinois', '62794');




-- Reviews Table Dummy Data

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (1, 'Bad Words', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',110,07);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (2, 'Command Performance',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',0,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (3, 'Pine Flat', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',01,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (4, 'Tortilla Soup',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',0,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (5, 'Benji', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',0,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (6, 'Lolita', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',70,50);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (7, 'Carmina and Amen (Carmina y amén)',
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',01,03);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (8, 'Dollman', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',50,04);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (9, 'One Deadly Summer (L''été meurtrier)',
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',04,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (10, 'Life Is But a Dream', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',30,10);


-- Ratings Table Dummy Data
-- insert into ratings (rating_level) values (1);
-- insert into ratings (rating_level) values (2);
-- insert into ratings (rating_level) values (3);
-- insert into ratings (rating_level) values (4);
-- insert into ratings (rating_level) values (5);
-- insert into ratings (rating_level) values (6);
-- insert into ratings (rating_level) values (7);
-- insert into ratings (rating_level) values (8);
-- insert into ratings (rating_level) values (9);
-- insert into ratings (rating_level) values (10);

-- Users Table Dummy Data
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('gtwiddell0', 'Grayce', 'Twiddell', 'gtwiddell0@youtu.be', '17126', 'PA', 'Harrisburg', '7179404563');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('bgorse1', 'Bax', 'Gorse', 'bgorse1@clickbank.net', '81015', 'CO', 'Pueblo', '7196273009');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('ggratland2', 'Gaby', 'Gratland', 'ggratland2@simplemachines.org', '20319', 'DC', 'Washington', '2025188797');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('jbrearley3', 'Jean', 'Brearley', 'jbrearley3@hp.com', '33169', 'FL', 'Miami', '7861247719');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('mpodd4', 'Marilyn', 'Podd', 'mpodd4@indiatimes.com', '66276', 'KS', 'Shawnee Mission', '9131403117');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('rfippe5', 'Rayner', 'Fippe', 'rfippe5@nature.com', '06145', 'CT', 'Hartford', '8607166538');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('lmacmichael6', 'Layney', 'MacMichael', 'lmacmichael6@hatena.ne.jp', '46614', 'IN', 'South Bend', '5741299805');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('icolebrook7', 'Irvin', 'Colebrook', 'icolebrook7@ft.com', '78235', 'TX', 'San Antonio', '2104047755');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('nlivoir8', 'Neal', 'Livoir', 'nlivoir8@geocities.jp', '50330', 'IA', 'Des Moines', '5159472657');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number)
        values ('radin9', 'Ronny', 'Adin', 'radin9@yahoo.com', '80305', 'CO', 'Boulder', '3034853651');

-- Rating_User Table Dummy Data
-- insert into rating_user (rating_id, user_name) values (1, 'gtwiddell0');
-- insert into rating_user (rating_id, user_name) values (2, 'gtwiddell0');
-- insert into rating_user (rating_id, user_name) values (3, 'bgorse1');
-- insert into rating_user (rating_id, user_name) values (4, 'bgorse1');
-- insert into rating_user (rating_id, user_name) values (5, 'bgorse1');


-- Audiotorium Data
insert into auditoriums (auditorium_name, available_seats) values ('Livefish', 46);
insert into auditoriums (auditorium_name, available_seats) values ('Tambee', 07);
insert into auditoriums (auditorium_name, available_seats) values ('Digitube', 30);
insert into auditoriums (auditorium_name, available_seats) values ('Plajo', 37);
insert into auditoriums (auditorium_name, available_seats) values ('Blogtag', 14);
insert into auditoriums (auditorium_name, available_seats) values ('Jabbertype', 95);
insert into auditoriums (auditorium_name, available_seats) values ('Skyble', 60);
insert into auditoriums (auditorium_name, available_seats) values ('Avavee', 58);
insert into auditoriums (auditorium_name, available_seats) values ('Gabspot', 66);
insert into auditoriums (auditorium_name, available_seats) values ('Linklinks', 15);


-- Categories Table Dummy Data
insert into categories (category) values ('Upcoming');
insert into categories (category) values ('In Theaters');
insert into categories (category) values ('Fan Favorities');
insert into categories (category) values ('Top Box Office');
insert into categories (category) values ('Originals');

-- Genres Table Dummy Data
INSERT INTO genres (genre_id, genre_name) VALUES (1, 'ACTION');
INSERT INTO genres (genre_id, genre_name) VALUES (2, 'DRAMA');
INSERT INTO genres (genre_id, genre_name) VALUES (3, 'ADVENTURE');
INSERT INTO genres (genre_id, genre_name) VALUES (4, 'COMEDY');
INSERT INTO genres (genre_id, genre_name) VALUES (5, 'HORROR');

-- Movie Genres Table Dummy Data
INSERT INTO movie_genres (movie_genre_id, movie_id, genre_id) VALUES (1,1,1);
INSERT INTO movie_genres (movie_genre_id, movie_id, genre_id) VALUES (2,2,2);
INSERT INTO movie_genres (movie_genre_id, movie_id, genre_id) VALUES (3,3,3);
INSERT INTO movie_genres (movie_genre_id, movie_id, genre_id) VALUES (4,4,4);
INSERT INTO movie_genres (movie_genre_id, movie_id, genre_id) VALUES (5,5,5);