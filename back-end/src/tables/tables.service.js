const knex = require("../db/connection");

function create(newTable) {
    return knex("tableseating")
        .insert(newTable)
        .returning("*")
}

function list(){
    return knex("tableseating")
        .select("*")
}

function read(tableId) {
    return knex("tableseating")
        .select("*")
        .where({table_id: tableId})
        .first()
}

function update({table_id, reservation_id}) {
    return knex("tableseating")
        .select("*")
        .where({ table_id: table_id })
        .update({reservation_id: reservation_id})
        .returning("*")
}

module.exports = {
    create,
    list,
    read,
    update,

}