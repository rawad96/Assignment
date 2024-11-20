const { employee } = require("../models");

const getAllEmployees = async () => {
  return await employee.findAll();
};

const getEmployeeById = async (id) => {
  return await employee.findByPk(id);
};

const addEmployee = async (obj) => {
  const newEmployee = await employee.create(obj);
  return newEmployee.dataValues.id;
};

const updateEmployee = async (id, obj) => {
  const result = await employee.update(obj, { where: { id } });
  return "Updated";
};

const deleteEmployee = async (id) => {
  const result = await employee.destroy({ where: { id } });
  return "deleted";
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
