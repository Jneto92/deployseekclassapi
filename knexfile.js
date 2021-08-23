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
    
      client: "mysql2",
      connection: {
        host: "us-cdbr-east.cleardb.com/",
        database: "heroku_db",
        user: "adffdadf2341",
        password: "adf4234"
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
    
      
      
    
};
