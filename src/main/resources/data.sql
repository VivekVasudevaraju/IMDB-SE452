



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

insert into reviews (review_id, review_title, review_text)
values (1, 'Bad Words', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.');

insert into reviews (review_id, review_title, review_text)
values (2, 'Command Performance',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.');

insert into reviews (review_id, review_title, review_text)
values (3, 'Pine Flat', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.');

insert into reviews (review_id, review_title, review_text)
values (4, 'Tortilla Soup',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.');

insert into reviews (review_id, review_title, review_text)
values (5, 'Benji', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.');

insert into reviews (review_id, review_title, review_text)
values (6, 'Lolita', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.');

insert into reviews (review_id, review_title, review_text)
values (7, 'Carmina and Amen (Carmina y amén)',
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.');

insert into reviews (review_id, review_title, review_text)
values (8, 'Dollman', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.');

insert into reviews (review_id, review_title, review_text)
values (9, 'One Deadly Summer (L''été meurtrier)',
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.');

insert into reviews (review_id, review_title, review_text)
values (10, 'Life Is But a Dream', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.');


-- Ratings Table Dummy Data
insert into ratings (rating) values (1);
insert into ratings (rating) values (2);
insert into ratings (rating) values (3);
insert into ratings (rating) values (4);
insert into ratings (rating) values (5);
insert into ratings (rating) values (6);
insert into ratings (rating) values (7);
insert into ratings (rating) values (8);
insert into ratings (rating) values (9);
insert into ratings (rating) values (10);

-- Users Table Dummy Data
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('gtwiddell0', 'Grayce', 'Twiddell', 'gtwiddell0@youtu.be', '17126', 'PA', 'Harrisburg', '7179404563', 'jPviz39cZY');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('bgorse1', 'Bax', 'Gorse', 'bgorse1@clickbank.net', '81015', 'CO', 'Pueblo', '7196273009', 'JiGzYoC4u3');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('ggratland2', 'Gaby', 'Gratland', 'ggratland2@simplemachines.org', '20319', 'DC', 'Washington', '2025188797', 'y0B0J4');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('jbrearley3', 'Jean', 'Brearley', 'jbrearley3@hp.com', '33169', 'FL', 'Miami', '7861247719', '3hxQScti');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('mpodd4', 'Marilyn', 'Podd', 'mpodd4@indiatimes.com', '66276', 'KS', 'Shawnee Mission', '9131403117', 'dg9aaLCw');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('rfippe5', 'Rayner', 'Fippe', 'rfippe5@nature.com', '06145', 'CT', 'Hartford', '8607166538', 'wRjSNc4MTW');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('lmacmichael6', 'Layney', 'MacMichael', 'lmacmichael6@hatena.ne.jp', '46614', 'IN', 'South Bend', '5741299805', 'v0RHMCylpzx');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('icolebrook7', 'Irvin', 'Colebrook', 'icolebrook7@ft.com', '78235', 'TX', 'San Antonio', '2104047755', 'uo3zo3ig');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('nlivoir8', 'Neal', 'Livoir', 'nlivoir8@geocities.jp', '50330', 'IA', 'Des Moines', '5159472657', 'nVgze6gpZ');
insert into users (user_name, first_name, last_name, email, zipcode, state, city, phone_number, password)
        values ('radin9', 'Ronny', 'Adin', 'radin9@yahoo.com', '80305', 'CO', 'Boulder', '3034853651', 'S7mZwoYFAZJ');



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