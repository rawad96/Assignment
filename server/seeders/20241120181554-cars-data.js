"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const models = await queryInterface.select(null, "Model", {
      attributes: ["id"],
    });

    if (models.length < 2) {
      throw new Error("Not enough models found!.");
    }
    const cars = await queryInterface.bulkInsert(
      "Cars",
      [
        {
          model_id: models[0].id,
          year: 2019,
          price: 50000,
          mileage: 150000,
        },
        {
          model_id: models[1].id,
          year: 2020,
          price: 70000,
          mileage: 100000,
        },
      ],
      { returning: true }
    );
    return {
      cars,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
