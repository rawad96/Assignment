"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      model_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Model",
          key: "id",
        },
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "Cars",
    }
  );
  Cars.associate = (models) => {
    Cars.belongsTo(models.Model, {
      foreignKey: "model_id",
      onDelete: "CASCADE",
    });
    Cars.belongsToMany(models.features, {
      through: "carFeatures",
      foreignKey: "carId",
    });
  };

  return Cars;
};
