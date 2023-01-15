"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teachers.hasMany(models.Learning_activities, {
        foreignKey: "teacher_id",
        as: "activity",
      });
      Teachers.belongsTo(models.Users, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Teachers.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Teachers",
    }
  );
  return Teachers;
};
