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



module.exports = {
    create,
    list
}