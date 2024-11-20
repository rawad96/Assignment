"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("accidentHistory", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cars",
          key: "id",
        },
        allowNull: false,
      },
      accidentDate: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("accidentHistory");
  },
};
