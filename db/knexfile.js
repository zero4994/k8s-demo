const path = require("path");
const customPath = path.resolve(__dirname, "../", ".env");
require("dotenv").config({ path: customPath });

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
  },
  port: 3306,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
