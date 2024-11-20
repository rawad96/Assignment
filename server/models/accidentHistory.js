"use strict";
module.exports = (sequelize, DataTypes) => {
  const AccidentHistory = sequelize.define(
    "accidentHistory",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cars",
          key: "id",
        },
        allowNull: false,
      },
      accidentDate: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "accidentHistory",
    }
  );

  return AccidentHistory;
};
