CREATE DATABASE animes_api;

CREATE TABLE animes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    poster TEXT,
    summary TEXT NOT NULL,
    official_link TEXT NOT NULL,
    trailer TEXT NOT NULL,
    publish_year INTEGER,
    season TEXT,
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
CREATE TABLE seasonalArticle (
    id SERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    season TEXT NOT NULL,
    month TEXT NOT NULL,
    month_Integer INTEGER NOT NULL
);
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_year,season,publish_date) 
VALUES ('JoJo''s Bizarre Adventure: Stone Ocean','https://t.ly/8_Q16', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://jojo-portal.com/anime/so/', 'https://www.youtube.com/watch?v=EeCX8Y0a278',2021,'autumn','2021-12-01');
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_year,season,publish_date) 
VALUES ('JoJo''s Bizarre Adventure: Golden Wind','https://t.ly/14T-x', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://jojo-animation.com', 'https://www.youtube.com/watch?v=R92KmKcg07Y',2018,'autumn','2018-10-05');
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_year,season,publish_date) 
VALUES ('Jujutsu Kaisen 2nd Season','https://t.ly/L9Kwq', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://jujutsukaisen.jp/', 'https://www.youtube.com/watch?v=PKHQuQF1S8k',2023,'Autumn','2023-07-06');
INSERT INTO animes (title,poster,summary, official_link, trailer, publish_year,season,publish_date) 
VALUES ('Zom 100: Zombie ni Naru made ni Shitai 100 no Koto','https://t.ly/LFXHr', 'qpiwyerioqhfobasnlfdlvn lad fladhfoqpihfopqihoqe', 'https://zom100.com/', 'https://www.youtube.com/watch?v=l2mag0-sn80',2023,'Autumn','2023-07-09');

INSERT INTO seasonalArticle (year, season, month, month_Integer)
VALUES (2023, 'Autumn', 'October', 10);
INSERT INTO seasonalArticle (year, season, month, month_Integer)
VALUES (2023, 'Summer', 'July', 7);
INSERT INTO seasonalArticle (year, season, month, month_Integer)
VALUES (2022, 'Autumn', 'October', 10);
INSERT INTO seasonalArticle (year, season, month, month_Integer)
VALUES (2022, 'Summer', 'July', 7);