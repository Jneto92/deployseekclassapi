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
        host: "us-cdbr-east-04.cleardb.com/",
        database: "heroku_1b851355c2f4f69",
        user: "b385cf454a43e9",
        password: "0c5bc3d6"
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
