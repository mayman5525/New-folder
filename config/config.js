require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "your_local_username",
    password: process.env.DB_PASSWORD || "your_local_password",
    database: process.env.DB_NAME || "your_local_database",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
  },
  test: {
    // Check if DATABASE_URL exists, otherwise use individual connection parameters
    ...(process.env.DATABASE_URL
      ? { url: process.env.DATABASE_URL }
      : {
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT || 5432,
        }),
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    // Check if DATABASE_URL exists, otherwise use individual connection parameters
    ...(process.env.DATABASE_URL
      ? { url: process.env.DATABASE_URL }
      : {
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT || 5432,
        }),
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
