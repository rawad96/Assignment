const { where } = require("sequelize");
const { Cars } = require("../models");
const { accidentHistory } = require("../models");
const { carFeatures } = require("../models");

const getAllCars = async () => {
  return await Cars.findAll();
};

const getCarById = async (id) => {
  return await Cars.findByPk(id);
};

const addCar = async (obj) => {
  const newCar = await Cars.create(obj);
  return newCar.dataValues.id;
};

const updateCar = async (id, obj) => {
  const result = await Cars.update(obj, { where: { id } });
  return "Updated";
};

const deleteCar = async (id) => {
  const deleteAccident = await accidentHistory.destroy({
    where: { carId: id },
  });
  const deleteCarFeatures = await carFeatures.destroy({ where: { carId: id } });
  const result = await Cars.destroy({ where: { id } });
  return "deleted";
};

module.exports = { getAllCars, addCar, updateCar, deleteCar, getCarById };
