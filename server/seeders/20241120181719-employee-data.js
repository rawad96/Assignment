"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const employee = await queryInterface.bulkInsert(
      "employee",
      [
        {
          name: "Rawad",
          email: "Rawad3001@gmail.com",
          jobTitle: "Department manager",
          salary: 11000,
          hireDate: new Date(),
          dateOfBirth: new Date(),
        },
        {
          name: "Loreen",
          email: "Loreen123@gmail.com",
          jobTitle: "Warehouse worker",
          salary: 11000,
          hireDate: new Date(),
          dateOfBirth: new Date(),
        },
      ],
      { returning: true }
    );
    return {
      employee,
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("employee", null, {});
  },
};
