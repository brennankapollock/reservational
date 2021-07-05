/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");


module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: "postgres://oxwhtlwk:c4T1UcoocHcKwyhbNty60SXWfXDrtNQD@batyr.db.elephantsql.com/oxwhtlwk",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: "postgres://drdjtoyp:oSfB-oO45iHs8CmldgH6GnfyVPljXoXE@batyr.db.elephantsql.com/drdjtoyp",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: "",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: "",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
