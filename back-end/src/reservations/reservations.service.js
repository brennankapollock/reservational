const knex = require("../db/connection");

function create(newReservation) {
    return knex("reservations")
        .insert(newReservation)
        .returning("*")
        .then(reservation=>reservation[0]);
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

function updateStatus(updatedReservation) {
  return knex('reservations')
    .select('*')
    .where({ reservation_id: updatedReservation.reservation_id })
    .update({ status: updatedReservation.status })
    .returning('*');
}



module.exports = {
    create,
    list,
    read,
    updateStatus,
}