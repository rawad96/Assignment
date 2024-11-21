const express = require("express");
const cors = require("cors");
const ModelRouter = require("./Routers/ModelRouter");
const CarsRouter = require("./Routers/carsRouter");
const AccidentHistoryRouter = require("./Routers/accidentHistoryRouter");
const CarsFeaturesRouter = require("./Routers/carsFeaturesRouter");
const EmployeeRouter = require("./Routers/employeeRouter");
const FeaturesRouter = require("./Routers/featuresRouter");

const { sequelize } = require("./models");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();
app.use("/models", ModelRouter);
app.use("/cars", CarsRouter);
app.use("/accidentHistory", AccidentHistoryRouter);
app.use("/features", FeaturesRouter);
app.use("/carFeatures", CarsFeaturesRouter);
app.use("/employees", EmployeeRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
