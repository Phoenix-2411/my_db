module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'my_db',
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'root',
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432')
  },
  test: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'type_seq', // updated to match development
    username: process.env.POSTGRES_DB_USERNAME || 'postgres',
    password: process.env.POSTGRES_DB_PASSWORD || 'root', // updated to match development   
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432')
  },
  production: {
    dialect: 'postgres',
    database: process.env.POSTGRES_DB_NAME || 'type_seq', // updated to match development and test
    username: process.env.POSTGRES_DB_USERNAME || 'postgres', // added default value
    password: process.env.POSTGRES_DB_PASSWORD || 'root', // added default value
    host: process.env.POSTGRES_DB_HOST || 'localhost', // added default value
    port: parseInt(process.env.POSTGRES_DB_PORT || '5432') // added default value
  }
}