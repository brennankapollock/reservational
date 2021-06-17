const knex = require("../db/connection");

function create(newReservation) {
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
}

function list(date){
    return knex("reservations")
        .select("*")
        .where({reservation_date: date})
        
}

function read(id) {
    return knex("reservations")
        .select("*")
        .where({reservation_id: Number(id)})
        .then(reservation => reservation[0])
}



module.exports = {
    create,
    list,
    read,
}