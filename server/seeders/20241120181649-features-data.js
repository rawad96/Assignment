"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const features = await queryInterface.bulkInsert(
      "features",
      [
        {
          name: "Bluetooth",
          description: "Use to connect phone to car system",
        },
        {
          name: "Rearview Camera",
          description: "Helps while reversing",
        },
      ],
      { returning: true }
    );
    return {
      features,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("features", null, {});
  },
};
