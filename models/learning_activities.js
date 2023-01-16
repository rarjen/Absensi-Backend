"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Learning_activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Learning_activities.belongsTo(models.Studies, {
        foreignKey: "study_id",
        as: "study",
      });

      Learning_activities.hasMany(models.Official_reports, {
        foreignKey: "learning_activity_id",
        as: "activity",
      });

      Learning_activities.belongsTo(models.Teachers, {
        foreignKey: "teacher_id",
        as: "teacher",
      });
    }
  }
  Learning_activities.init(
    {
      study_id: DataTypes.INTEGER,
      teacher_id: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Learning_activities",
    }
  );
  return Learning_activities;
};
