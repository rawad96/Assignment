const { carFeatures } = require("../models");

const getAllFeatures = async () => {
  return await carFeatures.findAll();
};

const getFeatureById = async (id) => {
  return await carFeatures.findByPk(id);
};

const addFeature = async (obj) => {
  const newFeature = await carFeatures.create(obj);
  return "created";
};

const updateFeature = async (id, obj) => {
  const result = await carFeatures.update(obj, { where: { id } });
  return "Updated";
};

const deleteFeature = async (id) => {
  const result = await carFeatures.destroy({ where: { id } });
  return "deleted";
};

module.exports = {
  getAllFeatures,
  getFeatureById,
  addFeature,
  updateFeature,
  deleteFeature,
};
