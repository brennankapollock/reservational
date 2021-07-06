/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://dvxtgqgc:PBhbGIcnF64z6uNTgstegjOAHRDhps45@batyr.db.elephantsql.com/dvxtgqgc",
  DATABASE_URL_DEVELOPMENT = "postgres://oxwhtlwk:c4T1UcoocHcKwyhbNty60SXWfXDrtNQD@batyr.db.elephantsql.com/oxwhtlwk",
  DATABASE_URL_TEST = "postgres://drdjtoyp:oSfB-oO45iHs8CmldgH6GnfyVPljXoXE@batyr.db.elephantsql.com/drdjtoyp",
  DATABASE_URL_PREVIEW = "postgres://zbkeeopb:Cgtx89Enofh9WfosNPU0a6iMwZnOpsIo@batyr.db.elephantsql.com/zbkeeopb",
  DEBUG,
} = process.env;


module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
    
  },


  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },


  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },


  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,

    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
