require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "your_local_username",
    password: process.env.DB_PASSWORD || "your_local_password",
    database: process.env.DB_NAME || "your_local_database",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false, // Disable logging for cleaner console output
  },
  test: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
