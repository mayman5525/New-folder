require("dotenv").config();
const { Sequelize } = require("sequelize");

// Use environment variables from .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", // Ensure it's set to PostgreSQL
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    logging: false,
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL Connected Successfully"))
  .catch((err) => console.error("❌ Connection Error:", err));
