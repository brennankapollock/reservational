
const tables = require("../fixtures/tables");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE tableseating RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("tableseating").insert(tables);
    })
};
