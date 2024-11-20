const express = require("express");
const CarsBLL = require("../BLL/carsBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await CarsBLL.getAllCars();
    res.send(cars);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await CarsBLL.getCarById(id);
    res.send(car);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await CarsBLL.addCar(obj);
    res.status(200).json({ id: result });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await CarsBLL.updateCar(id, obj);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CarsBLL.deleteCar(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
