const { features } = require("../models");

const getAllFeatures = async () => {
  return await features.findAll();
};

const getFeatureById = async (id) => {
  return await features.findByPk(id);
};

const addFeature = async (obj) => {
  const newFeature = await features.create(obj);
  return newFeature.dataValues.id;
};

const updateFeature = async (id, obj) => {
  const result = await features.update(obj, { where: { id } });
  return "Updated";
};

const deleteFeature = async (id) => {
  const result = await features.destroy({ where: { id } });
  return "deleted";
};

module.exports = {
  getAllFeatures,
  getFeatureById,
  addFeature,
  updateFeature,
  deleteFeature,
};
