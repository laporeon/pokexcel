<h1 align="center"> <img width="20" src="https://i.imgur.com/s4HWsSy.png" alt="Node.js logo"> PokExcel - RedFoxTech

![node](https://img.shields.io/static/v1?label=node&message=20.18.0&color=2d3748&logo=node.js&style=flat-square)
![postgresql](https://img.shields.io/static/v1?label=postgresql&message=14.15&color=2d3748&logo=postgresql&style=flat-square)
![prisma](https://img.shields.io/static/v1?label=prisma&message=6.1.0&color=2d3748&logo=prisma&style=flat-square)
[![eslint](https://img.shields.io/badge/eslint-9.17.0-4b32c3?style=flat-square&logo=eslint)](https://eslint.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/laporeon/backend-test-redfoxtech/blob/main/LICENSE.md)

</h1>

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Installing](#installing)
  - [Configuring](#configuring)
    - [.env](#env)
    - [Migrations](#migrations)
- [Usage](#usage)
  - [Starting](#starting)
  - [Routes](#routes)

## About

PokeAPI is my solution for [RedFoxTech challenge](https://github.com/RedFoxTech/vaga-backend-teste). It's a simple REST API that imports Pokémon data from an excel file and stores all data into a relational database.

## Requirements:

- [NodeJS](https://nodejs.org/en) v.20 or higher

If you use [NVM](https://github.com/nvm-sh/nvm), just run `nvm use` inside of the root folder.

## **Installing:**

Yarn:

```bash
$ yarn
```

NPM:

```bash
$ npm i
```

### **Configuring**

For this step, you'll need to create a [PostgreSQL](https://www.postgresql.org/) database to store the data.

#### **.env**

Rename the `.env.example` file to `.env` and update the variables with your settings.

| key          | description                              | default                                                        |
| ------------ | ---------------------------------------- | -------------------------------------------------------------- |
| PORT         | Port number where the app will run.      | `3000`                                                         |
| DATABASE_URL | Your PostgreSQL database connection URL. | `postgresql://<username>:<password>@localhost:5432/<database>` |

#### **Migrations**

Run the following script to create database migrations:

```bash
$ npm run prisma:migrate
```

## Usage

### **Starting**

```bash
$ npm start
```

### **Routes**

| route            | HTTP method |                               params                               |                           description                           |
| :--------------- | :---------: | :----------------------------------------------------------------: | :-------------------------------------------------------------: |
| `/documentation` |     GET     |                                 -                                  |                     Swagger documentation.                      |
| `/pokemons`      |    POST     |                                 -                                  |  Imports Pokemon data from Excel file and stores at dabatase.   |
| `/pokemons`      |     GET     | `name`, `type` and `pokedex_number` as _optional_ query parameters | Retrieves Pokemons. Returns all or filters by query parameters. |
| `/pokemons`      |   DELETE    |                                 -                                  |          Bulk delete all Pokemons stored at database.           |

[⬆ Back to the top](#--pokexcel---redfoxtech)
