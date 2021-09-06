
CREATE DATABASE geo;
\c geo
GRANT ALL PRIVILEGES ON DATABASE geo TO PUBLIC;


CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE location (
    id bigint NOT NULL,
    city character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    lat character varying(255) NOT NULL,
    lng character varying(255) NOT NULL
);

CREATE TABLE user_app (
    id bigint NOT NULL,
    password bytea NOT NULL,
    user_name character varying(10) NOT NULL
);

ALTER TABLE user_app ALTER COLUMN "password" TYPE bytea USING "password"::bytea;

INSERT INTO location (id, city, country, lat, lng) VALUES (1,'Cipolletti','Argentina','-4444','-5555');
INSERT INTO location (id, city, country, lat, lng) VALUES (2,'Ushuaia','Argentina','-666','-777');
INSERT INTO location (id, city, country, lat, lng) VALUES (3,'La Plata','Argentina','-999','-1234');

INSERT INTO user_app (id, password, user_name) VALUES (1,pgp_sym_encrypt('1234','secretKey'),'julio1234');

ALTER TABLE ONLY location ADD CONSTRAINT location_pkey PRIMARY KEY (id);

ALTER TABLE ONLY user_app ADD CONSTRAINT user_app_pkey PRIMARY KEY (id);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO PUBLIC;