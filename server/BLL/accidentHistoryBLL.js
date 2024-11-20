const { accidentHistory } = require("../models");

const getAllAccidents = async () => {
  return await accidentHistory.findAll();
};

const getAccidentById = async (id) => {
  return await accidentHistory.findByPk(id);
};

const addAccident = async (obj) => {
  const newAccident = await accidentHistory.create(obj);
  return newAccident.dataValues.id;
};

const updateAccident = async (id, obj) => {
  const result = await accidentHistory.update(obj, { where: { id } });
  return "Updated";
};

const deleteAccident = async (id) => {
  const result = await accidentHistory.destroy({ where: { id } });
  return "deleted";
};

module.exports = {
  getAllAccidents,
  addAccident,
  getAccidentById,
  updateAccident,
  deleteAccident,
};
