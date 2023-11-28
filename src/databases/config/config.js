require('dotenv').config()

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  }
}
// module.exports = {
//   development: {
//     username: 'postgres',
//     password: 'admin',
//     database: 'ecommerce_irede_test',
//     host: 'localhost',
//     dialect: 'postgres'
//   },
//   test: {
//     username: 'postgres',
//     password: 'admin',
//     database: 'ecommerce_irede_test',
//     host: 'localhost',
//     dialect: 'postgres'
//   },
//   production: {
//     username: 'postgres',
//     password: 'admin',
//     database: 'ecommerce_irede_test',
//     host: 'localhost',
//     dialect: 'postgres'
//   }
// }
