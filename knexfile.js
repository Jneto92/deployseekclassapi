// Update with your config settings.
module.exports = {

    /*client: 'mysql2',
    connection: {
      database: 'seekclass',
      user:     'root',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }*/
    production: {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      /*migrations: {
        directory: ‘/src/database/migrations’
      },*/
      useNullAsDefault: true,
    }
};
