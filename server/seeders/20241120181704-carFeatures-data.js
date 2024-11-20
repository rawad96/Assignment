"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cars = await queryInterface.select(null, "Cars", {
      attributes: ["id"],
    });

    const features = await queryInterface.select(null, "features", {
      attributes: ["id"],
    });

    if (cars.length < 2 || features.length < 2) {
      throw new Error("Not enough cars or features found!.");
    }

    const carFeatures = await queryInterface.bulkInsert(
      "carFeatures",
      [
        {
          carId: cars[0].id,
          featureId: features[0].id,
        },
        {
          carId: cars[1].id,
          featureId: features[1].id,
        },
      ],
      { returning: true }
    );
    return {
      carFeatures,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("carFeatures", null, {});
  },
};
