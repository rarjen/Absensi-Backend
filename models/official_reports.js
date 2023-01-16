"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Official_reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Official_reports.hasMany(models.Presences, {
        foreignKey: "official_report_id",
        as: "presence",
      });

      Official_reports.belongsTo(models.Learning_activities, {
        foreignKey: "id",
        as: "activity",
      });

      Official_reports.belongsTo(models.Academic_years, {
        foreignKey: "academic_year_id",
        as: "year",
      });
    }
  }
  Official_reports.init(
    {
      learning_activity_id: DataTypes.INTEGER,
      academic_year_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      date: DataTypes.DATEONLY,
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Official_reports",
    }
  );
  return Official_reports;
};
