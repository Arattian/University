//Set your local variables in .env file

require('dotenv').config();
module.exports = {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false
    },
    production: {
      use_env_variable: "DATABASE_URL",
      logging: false,
      port: 3306,
    }
}