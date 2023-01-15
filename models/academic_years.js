"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Academic_years extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Academic_years.hasMany(models.Official_reports, {
        foreignKey: "academic_year_id",
        as: "report",
      });
    }
  }
  Academic_years.init(
    {
      year: DataTypes.INTEGER,
      semester: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Academic_years",
    }
  );
  return Academic_years;
};
