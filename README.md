## Description

This is an example in how to use a simple version of Clean Arquitecture to organize a NodeJS/TS project

## Tecnologies

* Express
* Typescript
* Jest
* TSLint

## Prerequisites

- [Docker](https://docker.com)

## Set up and run demo

### Clone

Clone the repository from GitHub.

```
$ git clone https://github.com/viktorvillalobos/TODO.git
```

### Run the project

You have two ways to run this project:

```
docker-compose up
```

Or (GNU Tools are required)

```
make up
```

### Run tests

This project only includes coverage for the Business Logic (Model, Repositories & Services), maybe I will add more coverage to endpoints, this is just an example


```
docker-compose run --rm nodejs npm run test
```

## Specification

This project implement a simple version of Clean Arquitecture and exposes 4 simple endpoints:

```
GET http://localhost:3000/inmemory/machines HTTP/1.1
POST http://localhost:3000/inmemory/machines HTTP/1.1

GET http://localhost:3000/postgres/machines HTTP/1.1
POST http://localhost:3000/postgres/machines HTTP/1.1
```

### InMemoryDB Machine List
This endpoint return a list of Machines using a simple InMemory DB.

```http
GET http://localhost:3000/inmemory/machines HTTP/1.1
Content-type: application/json;

Response:
[
    {
        "id": 1,
        "name": "Machine #1",
        "price": 100,
        "markup": 0.25
    }
]
```


### InMemoryDB Machine Create
This endpoint create a Machine

```http
POST http://localhost:3000/inmemory/machines HTTP/1.1
Content-type: application/json;

{
    "id": 1,
    "name": "Machine #1",
    "price": 100,
    "markup": 0.25
}


Response:
{
    "id": 1,
    "name": "Machine #1",
    "price": 100,
    "markup": 0.25
}
```

### PostgreSQL Machine List
This endpoint return a list of Machines using a simple InMemory DB.

```http
GET http://localhost:3000/inmemory/machines HTTP/1.1
Content-type: application/json;

Response:
[
    {
        "id": 1,
        "name": "Machine #1",
        "price": 100,
        "markup": 0.25
    }
]
```


### PosgreSQL Machine Create
This endpoint create a Machine

```http
POST http://localhost:3000/inmemory/machines HTTP/1.1
Content-type: application/json;

{
    "id": 1,
    "name": "Machine #1",
    "price": 100,
    "markup": 0.25
}


Response:
{
    "id": 1,
    "name": "Machine #1",
    "price": 100,
    "markup": 0.25
}
```