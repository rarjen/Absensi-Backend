"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      class_id: {
        type: Sequelize.INTEGER,
      },
      full_name: {
        type: Sequelize.STRING(100),
      },
      nisn: {
        type: Sequelize.STRING(13),
      },
      place_of_birth: {
        type: Sequelize.STRING(40),
      },
      date_of_birth: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.TEXT,
      },
      father_name: {
        type: Sequelize.STRING(50),
      },
      mother_name: {
        type: Sequelize.STRING(50),
      },
      vice_name: {
        type: Sequelize.STRING(50),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
