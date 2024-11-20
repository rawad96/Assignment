"use strict";
module.exports = (sequelize, DataTypes) => {
  const CarsFeatures = sequelize.define(
    "carFeatures",
    {
      carId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cars",
          key: "id",
        },
        allowNull: false,
      },
      featureId: {
        type: DataTypes.INTEGER,
        references: {
          model: "features",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "carFeatures",
    }
  );

  return CarsFeatures;
};
