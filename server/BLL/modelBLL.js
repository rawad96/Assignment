const { Model } = require("../models");

const getAllModels = async () => {
  return await Model.findAll();
};

const getModelById = async (id) => {
  return await Model.findByPk(id);
};

const addModel = async (obj) => {
  const newModel = await Model.create(obj);
  return newModel.dataValues.id;
};

const updateModel = async (id, obj) => {
  const result = await Model.update(obj, { where: { id } });
  return "Updated";
};

const deleteModel = async (id) => {
  const result = await Model.destroy({ where: { id } });
  return "deleted";
};

module.exports = {
  getAllModels,
  getModelById,
  addModel,
  updateModel,
  deleteModel,
};
