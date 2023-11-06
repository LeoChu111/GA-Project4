CREATE DATABASE animes_api;

CREATE TABLE animes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    poster TEXT,
    summary TEXT NOT NULL,
    official_link TEXT NOT NULL,
    trailer TEXT NOT NULL,
    publish_date DATE NOT NULL,
    planning TEXT,
    original_author TEXT,
    chief_animation_supervisor TEXT,
    animation_supervisor TEXT,
    series_composition TEXT,
    character_design TEXT,
    music TEXT,
    animation_studio TEXT
);

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE collaboration (
    id SERIAL PRIMARY KEY,
    anime TEXT NOT NULL,
    actor TEXT NOT NULL
);
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_date) 
VALUES ('JoJo''s Bizarre Adventure: Stone Ocean','https://t.ly/8_Q16', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://jojo-portal.com/anime/so/', 'https://www.youtube.com/watch?v=EeCX8Y0a278', '2021-12-01');
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_date) 
VALUES ('JoJo''s Bizarre Adventure: Golden Wind','https://t.ly/14T-x', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://jojo-animation.com', 'https://www.youtube.com/watch?v=R92KmKcg07Y', '2018-10-05');