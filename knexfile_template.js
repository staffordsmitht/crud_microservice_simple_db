// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '$host',
      database: 'myusers',
      user:     '$user',
      password: '$password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
