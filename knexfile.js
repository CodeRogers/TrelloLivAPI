// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "123456",
      database: "livsaudetrello",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "123456",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-04.cleardb.com",
      user: "b9153e750de540",
      password: "d7d54bef",
      database: "heroku_bc550324a73e194",
    },
  },
};
