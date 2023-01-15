"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.Students, {
        foreignKey: "class_id",
        as: "student",
      });
      Classes.hasMany(models.Studies, {
        foreignKey: "class_id",
        as: "study",
      });
    }
  }
  Classes.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
