"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cars = await queryInterface.select(null, "Cars", {
      attributes: ["id"],
    });

    if (cars.length < 2) {
      throw new Error("Not enough cars found!.");
    }

    const accidentHistory = await queryInterface.bulkInsert(
      "accidentHistory",
      [
        {
          name: "Danny",
          carID: cars[1].id,
          accidentDate: new Date(),
          description: "Self-inflicted accident",
        },
      ],
      { returning: true }
    );
    return {
      accidentHistory,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accidentHistory", null, {});
  },
};
