"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("carFeatures", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      carId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cars",
          key: "id",
        },
        allowNull: false,
      },
      featureId: {
        type: Sequelize.INTEGER,
        references: {
          model: "features",
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("carFeatures");
  },
};
