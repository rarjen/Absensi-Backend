"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Presences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Presences.belongsTo(models.Students, {
        foreignKey: "student_id",
        as: "student",
      });
      Presences.belongsTo(models.Official_reports, {
        foreignKey: "official_report_id",
        as: "report",
      });
    }
  }
  Presences.init(
    {
      offical_report_id: DataTypes.INTEGER,
      student_id: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Presences",
    }
  );
  return Presences;
};
