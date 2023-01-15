"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Studies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Studies.belongsTo(models.Classes, {
        foreignKey: "class_id",
        as: "class",
      });

      Studies.hasMany(models.Learning_activities, {
        foreignKey: "study_id",
        as: "activity",
      });
    }
  }
  Studies.init(
    {
      name: DataTypes.STRING,
      class_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Studies",
    }
  );
  return Studies;
};
