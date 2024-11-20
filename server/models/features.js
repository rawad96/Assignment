"use strict";
module.exports = (sequelize, DataTypes) => {
  const Features = sequelize.define(
    "features",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "features",
    }
  );

  Features.associate = (models) => {
    Features.belongsToMany(models.Cars, {
      through: "carFeatures",
      foreignKey: "featureId",
    });
  };

  return Features;
};
