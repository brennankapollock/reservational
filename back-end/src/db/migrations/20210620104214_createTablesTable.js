

exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("tableseating", (table) => {
    table.increments("table_id").primary();
    table.string("table_name").notNullable();
    table.integer("capacity").notNullable();
    table.integer("reservation_id").unsigned().defaultTo(null)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tableseating");
};


