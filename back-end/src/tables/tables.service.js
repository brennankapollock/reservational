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

module.exports = {
    create,
    list,

}