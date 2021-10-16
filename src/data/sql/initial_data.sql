DROP DATABASE IF EXISTS machines;

CREATE DATABASE machines;

\connect machines

CREATE TABLE machines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(5, 2) NOT NULL,
    markup NUMERIC(5, 2) NOT NULL
);