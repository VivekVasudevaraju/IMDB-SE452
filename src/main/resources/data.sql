-- Reviews Table Dummy Data


insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (1, 'Wanda in the Multiverse of Happiness', 'The genre of this movie is horror-comedy. In a near future, this movie will eventually be renamed, and be called "Wanda in the Multiverse of Happiness. Victoria Alonso knows it. Sam Raimi knows it. Michael Waldron knows it. And I know it :) PS: Thank you for the second post credits scene :D.',110,07);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (2,'Dont believe the negative reviews',
        'WOW. Are people picky now a days.. I''m not sure why this is getting negative reviews. Haters gonna hate I guess. I loved this movie. It has great visuals, outstanding acting and a great horror side to it (thank you Sami). Please go watch this and judge for yourself.',0,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (3,'What the hell was that??', 'I''m sorry but is there anyone who liked this movie. I love SF, and even that pinch of horor is good but there is absolutley no plot. Boring conversations, too many unnecessary side characters and fight scenes. I felt like I was watching some low budget movie.',01,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (4,'The usual Marvel formula',
        'I like Oscar Isaac as much as the next guy but even he can''t keep me entertained. This show falls into the usual Marvel trap once again. The wacky tone is fine when I''m watching a 2 hour Marvel movie on my couch on a lazy Sunday afternoon.',7,3);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (5,'I expected more', 'I sincerely expected much more from this tv show, especially knowing that within the cast of actors were Oscar Isaac and Ethan Hawke. After the first episode everything seemed very promising, but I found this series boring. I can rescue some of the action scenes that are very good.',0,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (6,'This doesnt feel Marvel, I like it!', 'I don''t know anything about Moon Knight, I did not understand most of it but its interesting and different.
I think the costume should have been less silly.
This doesnt feel like a comic book series more like The Mummy. If you liked The Mummy watch it!',70,50);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (7,'Not enough multiverse and maybe too much madness',
        'Sam Raimi definitely put a splash of horror in this action film. Doctor Strange in the Multiverse of Madness is darker
         & more violent than any previous MCU movie, which could be considered a strength.
         However, I felt like there was not enough multiverse and maybe too much madness.
        Despite the entertaining visuals, the plot is fairly chaotic, and the acting & dialogue are
        inconsistent. This movie is an entertaining ride, but its a little too messy to stand on its own.',01,03);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (8,'A beautiful fable for now and the future', 'I believe everyone has a right to their opinion about films or other topics.
However from a lot of the comments I have read about this film, I do not think many got the gist of the message
from the author and the film maker. This film is a great modern fable, a fable in the dictionary is defined as a brief fictitious story that teaches a moral.
There are many morals defined in this film but foremost is integrity and a simple goodness. I have a half brother who grew up in the Southern U.S. and on one occasion we were
discussing this film and he said he felt it portrayed Southerners as dimwitted.'
,50,04);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (9,'A great movie you can watch again and again',
        'Because you''ll probably be confused the first time around. Its not a coincidence it stars some of the greatest actors of our time.',04,0);

insert into reviews (review_id, review_title, review_text,review_likes,review_dislikes)
values (10,'Powerful imagery, strong foundation setting', 'A strong first episode setting the scene of a multiple personality protagonist. The reflection metaphors work well (mirrors, puddles, scales ...) even if they are pasted on so thickly. So too the missing time around the girl, the goldfish and most impactfully the fighting. The use of implied violence is compelling especially in the car chase where there is already explosive action - this also informs us of the character of the alter ego.',30,10);


-- Ratings Table Dummy Data
insert into ratings (rating_level) values (10);
insert into ratings (rating_level) values (20);
insert into ratings (rating_level) values (30);
insert into ratings (rating_level) values (40);
insert into ratings (rating_level) values (50);
insert into ratings (rating_level) values (60);
insert into ratings (rating_level) values (70);
insert into ratings (rating_level) values (80);
insert into ratings (rating_level) values (90);
insert into ratings (rating_level) values (10);

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
insert into rating_user (rating_id, user_name) values (1, 'gtwiddell0');
insert into rating_user (rating_id, user_name) values (2, 'gtwiddell0');
insert into rating_user (rating_id, user_name) values (3, 'bgorse1');
insert into rating_user (rating_id, user_name) values (4, 'bgorse1');
insert into rating_user (rating_id, user_name) values (5, 'bgorse1');
insert into rating_user (rating_id, user_name) values (6, 'gtwiddell0');
insert into rating_user (rating_id, user_name) values (7, 'gtwiddell0');
insert into rating_user (rating_id, user_name) values (8, 'bgorse1');
insert into rating_user (rating_id, user_name) values (9, 'bgorse1');
insert into rating_user (rating_id, user_name) values (10, 'bgorse1');

-- username_userreview Dummy Data
insert into username_userreview (username_userreview_id,user_name,review_id) values (1,'gtwiddell0',1);
insert into username_userreview (username_userreview_id,user_name,review_id) values (2,'radin9',2);
insert into username_userreview (username_userreview_id,user_name,review_id) values (3,'nlivoir8',3);
insert into username_userreview (username_userreview_id,user_name,review_id) values (4,'icolebrook7',4);
insert into username_userreview (username_userreview_id,user_name,review_id) values (5,'lmacmichael6',5);
insert into username_userreview (username_userreview_id,user_name,review_id) values (6,'rfippe5',6);
insert into username_userreview (username_userreview_id,user_name,review_id) values (7,'mpodd4',7);
insert into username_userreview (username_userreview_id,user_name,review_id) values (8,'jbrearley3',8);
insert into username_userreview (username_userreview_id,user_name,review_id) values (9,'ggratland2',9);
insert into username_userreview (username_userreview_id,user_name,review_id) values (10,'bgorse1',10);




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

-- Movies Table Dummy Data

insert into movies (movie_title, description, duration, movie_img) values ('Doctor Strange', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 124, 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Moon knight', 'Ut at dolor quis odio consequat varius.', 35, 'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('The Batman', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 44, 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('NorthMan', 'Cras non velit nec nisi vulputate nonummy.', 139, 'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Uncharted', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 11, 'https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Batman v Superman', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 78, 'https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_QL75_UX380_CR0,4,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Halo', 'Cras in purus eu magna vulputate luctus.', 199, 'https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('John Wick 2', 'Aliquam quis turpis eget elit sodales scelerisque.', 72, 'https://m.media-amazon.com/images/M/MV5BYzk0MGFlZGMtYTk4ZS00MDFiLWJhNDAtODhmYWI2NmNhZDU4XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Doctor Strange', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 124, 'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Moon knight', 'Ut at dolor quis odio consequat varius.', 35, 'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('The Batman', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 44, 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('NorthMan', 'Cras non velit nec nisi vulputate nonummy.', 139, 'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Uncharted', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 11, 'https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Batman v Superman', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 78, 'https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_QL75_UX380_CR0,4,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('Halo', 'Cras in purus eu magna vulputate luctus.', 199, 'https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg');

insert into movies (movie_title, description, duration, movie_img) values ('John Wick 2', 'Aliquam quis turpis eget elit sodales scelerisque.', 72, 'https://m.media-amazon.com/images/M/MV5BYzk0MGFlZGMtYTk4ZS00MDFiLWJhNDAtODhmYWI2NmNhZDU4XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg');


-- movie_userreview Dummy Data
insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (100, 1, 1);
insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (200, 1, 6);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (300, 2, 2);
insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (400, 2, 3);
insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (500, 2, 4);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (600, 3, 5);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (700, 4, 6);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (800, 5, 7);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (900, 6, 8);

insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (999, 7, 9);

-- insert into movie_userreview(movie_userreview_id,movie_id,review_id) values (11, 8, 10);



-- Movie_Categories Table Dummy Data
insert into movie_categories (movie_id, category_id) VALUES (1,1);
insert into movie_categories (movie_id, category_id) VALUES (2,1);
insert into movie_categories (movie_id, category_id) VALUES (3,1);
insert into movie_categories (movie_id, category_id) VALUES (4,2);
insert into movie_categories (movie_id, category_id) VALUES (5,3);
insert into movie_categories (movie_id, category_id) VALUES (6,1);
insert into movie_categories (movie_id, category_id) VALUES (7,1);
insert into movie_categories (movie_id, category_id) VALUES (8,1);

-- Theatre Table Dummy Data
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (0,'Springfield', 'AMC Entertainment', 'Illinois', '62794');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (1,'Peoria', 'Apple Cinemas', 'Illinois', '61614');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (2,'Carol Stream', 'Apple Cinemas', 'Illinois', '60351');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (3,'Naperville', 'Marcus Theatres', 'Illinois', '60567');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (4,'Evanston', 'AMC Entertainment', 'Illinois', '60208');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (5,'Peoria', 'AMC Entertainment', 'Illinois', '61614');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (6,'Chicago', 'AMC Entertainment', 'Illinois', '60611');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (7,'Chicago', 'AMC Entertainment', 'Illinois', '60611');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (8,'Naperville', 'AMC Entertainment', 'Illinois', '60567');
INSERT INTO theatres (theatre_id,theatre_city, theatre_name, theatre_state, theatre_zipcode) VALUES (9,'Springfield', 'Marcus Theatres', 'Illinois', '62794');

-- Theatre Movie Dummy Data
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (0, 0, 1);
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (1, 0, 2);
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (2, 1, 1);
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (3, 1, 3);
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (4, 2, 4);
INSERT INTO movie_theatres (movie_theatres_id, theatre_id, movie_id) VALUES (5, 2, 5);

-- Audiotorium Dummy Data
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

-- Theatre Auditorium Dummy Data
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (0, 0, 1);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (1, 0, 2);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (2, 1, 3);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (3, 1, 4);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (4, 2, 5);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (5, 2, 6);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (6, 3, 7);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (7, 3, 8);
INSERT INTO theatre_auditorium (theatre_auditorium_id, theatre_id, auditorium_id) VALUES (8, 4, 9);

-- Showtimes Dummy Data
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (0, 1, '10:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (1, 1, '07:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (2, 1, '12:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (3, 1, '01:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (4, 1, '06:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (5, 2, '04:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (6, 2, '13:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (7, 3, '21:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (8, 3, '22:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (9, 3, '17:00:00');
INSERT INTO showtimes (showtime_id, auditorium_id, start_time) VALUES (10, 4, '02:00:00');

-- Movie_Ratings Table Dummy Data
insert into movie_ratings (movie_id, rating_id) VALUES (1,1);
insert into movie_ratings (movie_id, rating_id) VALUES (1,2);
insert into movie_ratings (movie_id, rating_id) VALUES (1,3);
insert into movie_ratings (movie_id, rating_id) VALUES (4,4);
insert into movie_ratings (movie_id, rating_id) VALUES (5,5);
insert into movie_ratings (movie_id, rating_id) VALUES (6,6);
insert into movie_ratings (movie_id, rating_id) VALUES (7,7);
insert into movie_ratings (movie_id, rating_id) VALUES (8,8);
insert into movie_ratings (movie_id, rating_id) VALUES (2,9);
insert into movie_ratings (movie_id, rating_id) VALUES (3,10);

-- Award Table Dummy Data
INSERT INTO awards (award_id, award_title) VALUES (1, 'MTV Award for Best Actor');
INSERT INTO awards (award_id, award_title) VALUES (2, 'MTV Award for Best Actress');
INSERT INTO awards (award_id, award_title) VALUES (3, 'MTV Award for Best Villain');

-- Movie Awards Dummy Data
INSERT INTO movie_awards (movie_awards_id, award_id, movie_id) VALUES (1,1,1);
INSERT INTO movie_awards (movie_awards_id, award_id, movie_id) VALUES (2,2,2);
INSERT INTO movie_awards (movie_awards_id, award_id, movie_id) VALUES (3,3,3);

-- Actor Table Dummy Data
INSERT INTO actors (actor_id, actor_name, actor_character, actor_image) VALUES (1, 'Benedict Cumberbatch', 'Dr. Stephen Strange', '');

-- Movie Actors Dummy Data
INSERT INTO movie_actors (movie_actors_id, actor_id, movie_id) VALUES (1,1,1);

