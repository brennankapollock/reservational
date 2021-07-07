# Capstone: Restaurant Reservation System

> This project was my final capstone in the Thinkful Engineering Flex Program.

## Project Description

> You have been hired as a full stack developer at _Periodic Tables_, a startup that is creating a reservation system for fine dining restaurants.
> The software is used only by restaurant personnel when a customer calls to request a reservation.
> At this point, the customers will not access the system online.

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
