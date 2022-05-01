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