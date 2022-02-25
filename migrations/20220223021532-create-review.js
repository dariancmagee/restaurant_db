'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewer_id: {
        type: Sequelize.INTEGER
      },
      stars: {
        type: Sequelize.INTEGER,
        validate: {min: 1, max: 5}
      },
      title: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.STRING
      },
      restaurant_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};