"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const models = await queryInterface.bulkInsert(
      "Model",
      [{ name: "Nisan Alitma" }, { name: "Ford Edge" }],
      { returning: true }
    );
    return {
      models,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Model", null, {});
  },
};
