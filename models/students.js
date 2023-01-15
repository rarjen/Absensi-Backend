"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsTo(models.Classes, {
        foreignKey: "class_id",
        as: "class",
      });

      Students.hasMany(models.Presences, {
        foreignKey: "student_id",
        as: "presence",
      });
    }
  }
  Students.init(
    {
      class_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      nisn: DataTypes.STRING,
      place_of_birth: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      address: DataTypes.TEXT,
      father_name: DataTypes.STRING,
      mother_name: DataTypes.STRING,
      vice_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Students",
    }
  );
  return Students;
};
