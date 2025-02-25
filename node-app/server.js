require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const reportRoutes = require("./routes/reportRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/projects", projectRoutes);
app.use("/reports", reportRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true });
sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
