# Restaurant Reservation Platform

## Project Description

> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.

## Built With

- React.js
- Bootstrap
- CSS
- JSX
- Javascript
- Express
- Knex
- PostgreSQL
- Node.js
- CORS

## Deployment

- [Client](https://reservational.vercel.app/dashboard)
- [Server](https://reservational-api.vercel.app/)

### API Paths

| API path                               | Function                                                                                                        |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `/reservations`                        | GET: List all reservations. POST: Create a new reservation                                                      |
| `/reservations/?date='YYYY-MM-DD'`     | GET: All reservations by date (formated YYYY-MM-DD) ordered by reservation_time                                 |
| `/reservations/:reservation_id`        | GET: A reservation by reservation_id, PUT: Update a reservation by reservation_id, DELETE: Delete a reservation |
| `/reservations/:reservation_id/status` | PUT: Update a reservation status as either "booked", "seated", "finished", or "cancelled"                       |
| `/tables`                              | GET: List all tables, POST: Create a new table                                                                  |
| `/tables/:tables_id`                   | GET: A table by table_id, PUT: Update a table, DELETE: Delete a table                                           |
| `/tables:table_id/seat`                | PUT: Update a table's status to "Occupied" DELETE: Update a table's status to "Free"                            |


## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.






